<script setup>
import { cart } from '../store/cart'
</script>

<template>
  <div class="cart-panel" v-if="cart.items.length">
    <h3>Carrito 🛒</h3>

    <div v-for="item in cart.items" :key="item.id" class="item">
      <p>{{ item.name }}</p>
      <span>x{{ item.quantity }}</span>
      <button @click="cart.remove(item.id)">❌</button>
    </div>
  </div>
</template>

<style scoped>
.cart-panel {
  position: fixed;
  right: 20px;
  bottom: 20px;
  background: white;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  width: 250px;
}

.item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
</style>
