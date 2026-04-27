<template>
  <div class="product-grid">
    <div class="card" v-for="product in products" :key="product.id">
      
      <img :src="product.image" :alt="product.name" />

      <h3>{{ product.name }}</h3>
      <p class="price">{{ product.price }}</p>

      <button @click="cart.add(product)">Agregar al carrito 🛒</button>
    </div>
  </div>
</template>

<script setup>
import { cart } from '../store/cart'

const products = [
  {
    id: 1,
    name: 'Collar Premium',
    price: '$5.990',
    image: 'https://placedog.net/400/300?id=1'
  },
  {
    id: 2,
    name: 'Juguete Interactivo',
    price: '$3.990',
    image: 'https://placedog.net/400/300?id=2'
  },
  {
    id: 3,
    name: 'Comida Premium',
    price: '$12.990',
    image: 'https://placedog.net/400/300?id=3'
  },
  {
    id: 4,
    name: 'Cama Cómoda',
    price: '$9.990',
    image: 'https://placedog.net/400/300?id=4'
  }
]
</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.card {
  background: white;
  border-radius: 24px;
  padding: 1.2rem;
  box-shadow: 0 10px 25px rgba(255, 182, 193, 0.25);
  transition: 0.3s;
  text-align: center;
}

.card:hover {
  transform: translateY(-8px);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 18px;
  margin-bottom: 15px;
}

.price {
  font-weight: 600;
  margin-bottom: 10px;
}
</style>