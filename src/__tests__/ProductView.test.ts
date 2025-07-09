import { flushPromises, mount } from '@vue/test-utils'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import ProductView from '../views/ProductView.vue'
import { useRoute } from 'vue-router'
import { createTestingPinia } from '@pinia/testing'
const mockProduct = {
  id: 1,
  title: 'Test Product',
  category: 'Test Category',
  rating: { rate: 4.5, count: 10 },
  image: 'https://example.com/image.png',
  description: 'Test Description',
  price: 99.99,
}
vi.mock('vue-router', () => ({
  useRoute: vi.fn(),
}))
describe('product page', () => {
  beforeEach(() => {
    // Reset mocks
    vi.resetAllMocks()

    //  Mock fetch
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockProduct),
      } as Response),
    )
    ;(useRoute as ReturnType<typeof vi.fn>).mockReturnValue({
      params: { id: 1 },
    })
  })
  test('Display product info', async () => {
    const wrapper = mount(ProductView, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            stubActions: false,
          }),
        ],
      },
    })
    await flushPromises()

    expect(fetch).toHaveBeenCalledWith('https://fakestoreapi.com/products/1')
    expect(wrapper.text()).toContain('Test Product')
    expect(wrapper.text()).toContain('Test Category')
    expect(wrapper.text()).toContain('Test Description')
    expect(wrapper.text()).toContain('$99.99')
  })
})
