import { mount, VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import HomeView from '../views/HomeView.vue'
import { createTestingPinia } from '@pinia/testing'
import { useProductsStore } from '../store/products'
let wrapper: VueWrapper
describe('home page', () => {
  beforeEach(() => {
    wrapper = mount(HomeView, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            stubActions: false, // allow real action behavior if needed
          }),
        ],
        stubs: {
          RouterLink: true,
        },
      },
    })
  })
  test('Display products list', async () => {
    const productStore = useProductsStore()

    productStore.products = [
      {
        id: 1,
        title: 'Test Product',
        price: 100,
        image: 'https://picsum.photos/200/300',
        category: 'Test Category',
      },
      {
        id: 2,
        title: 'Test Product 2',
        price: 200,
        image: 'https://picsum.photos/200/300',
        category: 'Test Category',
        description: 'This is another test product description.',
      },
    ]
    await wrapper.vm.$nextTick()
    expect(wrapper).toBeTruthy() // Check if the component is mounted successfully
    expect(wrapper.findAll('.product-card').length).toBe(2) // Check if two products are displayed
    expect(wrapper.find('.product-card__category').text()).toContain('Test Category') // Check if the first product category is displayed correctly
    expect(wrapper.find('.product-card').text()).toContain('$100.00') // Check if the first product price is displayed correctly
    expect(wrapper.find('.product-card__image').attributes('src')).toBe(
      'https://picsum.photos/200/300',
    ) // Check if the first product image is displayed correctly
  })
  test('Display error message when failed to fetch products', async () => {
    const productStore = useProductsStore()

    productStore.products = []
    await wrapper.vm.$nextTick()
    expect(wrapper).toBeTruthy() // Check if the component is mounted successfully
    expect(wrapper.find('.error-message').exists()).toBe(true) // Check if the error message is displayed
    expect(wrapper.find('.error-message').text()).toContain('Failed to load products') // Check if the error message text is correct
  })
})
