<template>
  <div>
    <Navbar />

    <section class="hero">
      <h1>Todo para tu mascota 🐾</h1>
      <p>Productos premium en Chile para perros y gatos</p>

      <button @click="scrollTo('productos')">
        Ver tienda 🛍️
      </button>
    </section>

    <section id="productos" class="products">
      <h2>Productos</h2>
      <ProductList />
    </section>

    <FooterSection />
    <Cart />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import ProductList from '../components/ProductList.vue'
import FooterSection from '../components/FooterSection.vue'
import Cart from '../components/Cart.vue'

const scrollTo = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 80px 20px;
}

.products {
  padding: 50px 20px;
}

.contacto {
  padding: 50px;
  text-align: center;
}
</style>
