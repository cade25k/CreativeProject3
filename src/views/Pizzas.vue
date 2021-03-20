<template>
<div>
  <h1> Your Pizzas </h1>
  <CartList :products="cart" />
</div>
</template>

<script>
import CartList from "../components/CartList.vue"
export default {
  name: 'Pizzas',
  components: {
    CartList
  },
  data() {
    return {
    }
  },
  computed: {
    cart() {
      return this.$root.$data.cart;
    }
  },
  methods: {
  }
}
</script>
