import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import SideCart from '../components/cart/SideCart.vue'
import { useCartItems } from '../store/cart-items'
import { createTestingPinia } from '@pinia/testing'
describe('Shopping Cart', () => {
  const pinia = createTestingPinia({
    createSpy: vi.fn,
    stubActions: false,
  })
  const store = useCartItems()
  beforeEach(() => {
    store.cartItems = []
  })
  test('Cart is empty initially', () => {
    const wrapper = mount(SideCart, {
      props: {
        isOpen: true,
      },

      global: {
        plugins: [pinia],
        stubs: {
          RouterLink: true,
        },
      },
    })

    expect(wrapper.find('.cart__empty-fallback').text()).toContain('empty') // Adjust if your empty message differs
  })
  test('Cart displays items when not empty', () => {
    const mockItems = [
      {
        id: 1,
        title: 'Test Product',
        price: 100,
        image: 'https://picsum.photos/200/300',
        quantity: 2,
      },
      {
        id: 2,
        title: 'Another Product',
        price: 50,
        image: 'https://picsum.photos/200/300',
        quantity: 1,
      },
    ]
    const cartItemsStore = useCartItems(pinia)
    cartItemsStore.cartItems = mockItems

    const wrapper = mount(SideCart, {
      props: {
        isOpen: true,
      },
      global: {
        plugins: [pinia],
        stubs: {
          RouterLink: true,
        },
      },
    })
    console.log(wrapper.html())

    expect(wrapper.findAll('.cart__item').length).toBe(mockItems.length) // Check if the number of cart items matches
    expect(wrapper.find('.cart__footer').text()).toContain(cartItemsStore.getCartTotalPrice) // Check if the total price is calculated correctly
    expect(wrapper.find('.cart__footer').text()).toContain(cartItemsStore.getCartTotalQuantity) // Check if the total quantity is calculated correctly
  })
  test('Add product to cart', async () => {
    const cartItemsStore = useCartItems(pinia)
    // Add a product to the cart
    cartItemsStore.addToCart({
      title: 'Test Product',
      image: 'https://picsum.photos/200/300',
      price: 100,
    })
    expect(cartItemsStore.getCartItems).toEqual([
      {
        id: expect.any(Number),
        title: 'Test Product',
        image: 'https://picsum.photos/200/300',
        price: 100,
        quantity: 1,
      },
    ])

    // Verify that the cart total price and quantity are updated correctly
    expect(cartItemsStore.getCartTotalPrice).toBe(100)
    expect(cartItemsStore.getCartTotalQuantity).toBe(1)
  })
  test('Remove product from cart', async () => {
    const wrapper = mount(SideCart, {
      props: {
        isOpen: true,
      },
      global: {
        plugins: [pinia],
        stubs: {
          RouterLink: true,
        },
      },
    })
    const cartItemsStore = useCartItems(pinia)
    // Add a product to the cart
    cartItemsStore.addToCart({
      title: 'Test Product',
      image: 'https://picsum.photos/200/300',
      price: 50,
    })
    // Remove the product from the cart
    cartItemsStore.removeFromCart(cartItemsStore.getCartItems[0])
    expect(cartItemsStore.getCartItems).toEqual([])
    expect(wrapper.findAll('.cart__item').length).toEqual(0) // Check if the number of cart items matches
    expect(wrapper.find('.cart__empty-fallback').text()).toEqual(
      'Your cart is empty. Add items here.',
    )
  })
  test('Update product quantity in cart', async () => {
    const cartItemsStore = useCartItems(pinia)
    // Add a product to the cart
    cartItemsStore.addToCart({
      title: 'Test Product',
      image: 'https://picsum.photos/200/300',
      price: 100,
      quantity: 1,
    })
    // Update the quantity of the product in the cart
    cartItemsStore.getCartItems[0].quantity = 2
    expect(cartItemsStore.getCartItems).toEqual([
      {
        id: expect.any(Number),
        title: 'Test Product',
        image: 'https://picsum.photos/200/300',
        price: 100,
        quantity: 2,
      },
    ])
  })
  test('Cart emits toggle event when closed', async () => {
    const wrapper = mount(SideCart, {
      props: {
        isOpen: true,
      },
      global: {
        plugins: [pinia],
      },
    })

    await wrapper.find('.cart__close').trigger('click') // Simulate clicking the close button
    expect(wrapper.emitted('toggle-cart')).toBeTruthy() // Check if the toggle-cart event was emitted
  })
})
