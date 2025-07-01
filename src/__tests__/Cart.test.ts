import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import SideCart from '../components/SideCart.vue'

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
})
