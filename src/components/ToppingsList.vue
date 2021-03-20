<template>
<div class="wrapper">
  <div class="toppings">
    <div class="topping" v-for="topping in toppings" :key="topping.id">
      <div class="info">
        <h1>{{topping.name}}</h1>
      </div>
      <div class="price">
        <button class="auto" @click="addTopping(topping.name)">Add Topping</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ToppingsList',
  props: {
    toppings: Array
  },
  methods: {
    addToCart: function(item) {
      this.$root.$data.cart.push(item);
    },
    addTopping: function(item) {
      if (this.$root.$data.addedToppings.indexOf(item) == -1) {
        this.$root.$data.addedToppings.push(item);
      }
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

.toppings {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.topping {
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
