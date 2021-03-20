<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="info">
        <h1>{{product.name}}</h1>
      </div>
      <div class="image">
        <img :src="'/images/products/' + product.image"/>
      </div>
      <div class="toppings-info">
        <p>{{product.toppings}}</p>
      </div>
      <div class="price">
        <h2>{{product.price}}</h2>
        <button class="auto" @click="addToCart(product)">Add Pizza</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  },
  methods: {
    addToCart: function(item) {
      this.$root.$data.cart.push(item);
    },
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
  border-radius: 25px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
  border-radius: 25px;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: IndianRed;
  color: #000;
  padding: 10px 30px;
  height: 80px;
  border-radius: 25px;
}

.toppings-info {
  background: IndianRed;
  color: #000;
  padding: 10px 30px;
  height: 55px;
  border-radius: 25px;
}

.info h1 {
  font-size: 20px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

.toppings-info p {
  margin: 0px;
  font-size: 12px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: Khaki;
  color: black;
  border: none;
  border-radius: 25px;
}

.auto {
  margin-left: auto;
}
</style>
