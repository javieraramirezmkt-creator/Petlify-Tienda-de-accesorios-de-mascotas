<script setup>
import { cart } from '../store/cart'
</script>

<template>
  <header class="navbar">
    <h2>🐾 PetLify</h2>

    <nav>
      <a href="#inicio">Inicio</a>
      <a href="#productos">Productos</a>
      <a href="#contacto">Contacto</a>

      <!-- 🛒 carrito -->
      <span class="cart">
        🛒 {{ cart.totalItems() }}
      </span>
    </nav>
  </header>
</template>

<style scoped>
.cart {
  background: var(--pet-primary);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
@media (max-width: 768px) {
  .hero {
    padding: 100px 20px 60px;
  }

  .product-grid {
    grid-template-columns: 1fr;
  }
}
