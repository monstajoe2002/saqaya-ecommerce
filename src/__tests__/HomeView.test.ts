import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import HomeView from '../views/HomeView.vue'
describe('home page', () => {
  test('Display products list', () => {
    const wrapper = mount(HomeView, {
      global: {
        stubs: {
          RouterLink: true,
        },
        mocks: {
          $store: {
            getters: {
              getProducts: [
                {
                  id: 1,
                  title: 'Test Product 1',
                  price: 100,
                  image: 'https://picsum.photos/200/300',
                  category: 'Test Category',
                  description: 'This is a test product description.',
                },
                {
                  id: 2,
                  title: 'Test Product 2',
                  price: 200,
                  image: 'https://picsum.photos/200/300',
                  category: 'Test Category',
                  description: 'This is another test product description.',
                },
              ],
            },
            dispatch: vi.fn(),
          },
        },
      },
    })
    expect(wrapper).toBeTruthy() // Check if the component is mounted successfully
    expect(wrapper.findAll('.product-card').length).toBe(2) // Check if two products are displayed
    expect(wrapper.find('.product-card__category').text()).toContain('Test Category') // Check if the first product category is displayed correctly
    expect(wrapper.find('.product-card').text()).toContain('$100.00') // Check if the first product price is displayed correctly
    expect(wrapper.find('.product-card__image').attributes('src')).toBe(
      'https://picsum.photos/200/300',
    ) // Check if the first product image is displayed correctly
  }) // Check if the first product price is displayed correctly
})
