import { flushPromises, mount, VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import ProductView from '../views/ProductView.vue'
import { useRoute } from 'vue-router'
import { createTestingPinia } from '@pinia/testing'
import { useSelectedProduct } from '../store/selected-product'
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
let wrapper: VueWrapper
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
    wrapper = mount(ProductView, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            stubActions: false,
          }),
        ],
      },
    })
  })
  test('Display product info', async () => {
    await flushPromises()

    expect(fetch).toHaveBeenCalledWith('https://fakestoreapi.com/products/1')
    expect(wrapper.text()).toContain('Test Product')
    expect(wrapper.text()).toContain('Test Category')
    expect(wrapper.text()).toContain('4.5/5')
    expect(wrapper.text()).toContain('10 reviews')
    expect(wrapper.text()).toContain('Test Description')
    expect(wrapper.text()).toContain('$99.99')
  })
  test('Display error message when fetching fails', async () => {
    global.fetch = vi.fn(() => Promise.reject())
    const product = useSelectedProduct()
    product.isLoading = false
    try {
      await product.getProduct()
    } catch {
      product.error = 'Failed to fetch product details'
    }
    await wrapper.vm.$nextTick()
    expect(wrapper).toBeTruthy() // Check if the component is mounted successfully
    expect(wrapper.find('[data-testid="selected-product-error-message"]').exists()).toBe(true) // Check if the error message is displayed
    expect(wrapper.find('[data-testid="selected-product-error-message"]').text()).toContain(
      'Failed to fetch product details',
    ) // Check if the error message text is correct
  })
})
