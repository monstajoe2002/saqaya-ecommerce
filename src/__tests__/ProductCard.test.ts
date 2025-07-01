import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import ProductCard from '../components/products/ProductCard.vue'
describe('product card', () => {
  test('Displays card', () => {
    // mount the ProductCard component with props
    const wrapper = mount(ProductCard, {
      props: {
        id: 1,
        title: 'Test Product',
        price: 100,
        image: 'https://picsum.photos/200/300',
        category: 'Test Category',
      },
      global: {
        stubs: {
          RouterLink: true, // Stub RouterLink globally
        },
      },
    })
    expect(wrapper).toBeTruthy() // Check if the component is mounted successfully
  })
})
