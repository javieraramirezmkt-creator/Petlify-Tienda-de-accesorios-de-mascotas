import { reactive } from 'vue'

export const cart = reactive({
  items: [],

  add(product) {
    const existing = this.items.find(p => p.id === product.id)

    if (existing) {
      existing.quantity++
    } else {
      this.items.push({ ...product, quantity: 1 })
    }
  },

  remove(id) {
    this.items = this.items.filter(p => p.id !== id)
  },

  totalItems() {
    return this.items.reduce((acc, item) => acc + item.quantity, 0)
  }
})
