import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import ProductView from '../views/ProductView.vue'
describe('product page', () => {
  test('Display product info', () => {
    const wrapper = mount(ProductView, {
      global: {
        mocks: {
          $store: {
            getters: {
              // mock the store's getProduct method
              getProduct: {
                id: 1,
                title: 'Test Product',
                price: 100,
                image: 'https://picsum.photos/200/300',
                category: 'Test Category',
                description: 'This is a test product description.',
              },
            },
            dispatch: vi.fn(),
          },
          $route: {
            params: { id: 1 },
          },
        },
      },
    })
    expect(wrapper).toBeTruthy() // Check if the component is mounted successfully
    expect(wrapper.find('.product-view__title').text()).toBe('Test Product') // Check if the product title is displayed correctly
    expect(wrapper.find('.product-view__price-value').text()).toBe('$100.00') // Check if the product price is displayed correctly
    expect(wrapper.find('.product-view__category-label').text()).toBe('Test Category') // Check if the product category is displayed correctly
    expect(wrapper.find('.product-view__description').text()).toBe(
      'This is a test product description.',
    ) // Check if the product description is displayed correctly
    expect(wrapper.find('.product-view__image').attributes('src')).toBe(
      'https://picsum.photos/200/300',
    ) // Check if the product image is displayed correctly
  })
})
