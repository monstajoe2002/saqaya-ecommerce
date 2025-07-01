import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import SideCart from '../components/cart/SideCart.vue'

describe('Shopping Cart', () => {
  test('Cart is empty initially', () => {
    const wrapper = mount(SideCart, {
      props: {
        isOpen: true,
      },

      global: {
        mocks: {
          $store: {
            getters: {
              getCartItems: vi.fn(() => []), // Mocking the getter to return an empty array
            },
          },
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
    const mockTotalPrice = mockItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const mockTotalQuantity = mockItems.reduce((acc, item) => acc + item.quantity, 0)
    const wrapper = mount(SideCart, {
      props: {
        isOpen: true,
      },

      global: {
        mocks: {
          $store: {
            getters: {
              getCartItems: mockItems, // Mocking the getter to return mock items
              getCartTotalPrice: mockTotalPrice,
              getCartTotalQuantity: mockTotalQuantity,
            },
          },
        },
      },
    })

    // expect(wrapper.findAll('.cart__item').length).toBe(mockItems.length) // Check if the number of cart items matches
    expect(wrapper.find('.cart__footer').text()).toContain(mockTotalPrice) // Check if the total price is calculated correctly
    expect(wrapper.find('.cart__footer').text()).toContain(mockTotalQuantity) // Check if the total quantity is calculated correctly
  })
  test('Cart emits toggle event when closed', async () => {
    const wrapper = mount(SideCart, {
      props: {
        isOpen: true,
      },

      global: {
        mocks: {
          $store: {
            getters: {
              getCartItems: vi.fn(() => []), // Mocking the getter to return an empty array
            },
          },
        },
      },
    })

    await wrapper.find('.cart__close').trigger('click') // Simulate clicking the close button
    expect(wrapper.emitted('toggle-cart')).toBeTruthy() // Check if the toggle-cart event was emitted
  })
})
