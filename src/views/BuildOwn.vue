<template>
<div>
  <h1> Build Your Own Pizza </h1>
  <ToppingsList :toppings="toppings" />
  <button class="auto" @click="addCustom()">Add Pizza</button>
</div>
</template>

<script>
import ToppingsList from "../components/ToppingsList.vue"
export default {
  name: 'BuildOwn',
  components: {
    ToppingsList
  },

  methods: {
    addCustom: function() {
      let theToppings = "";
      for (let i = 0; i < this.$root.$data.addedToppings.length; ++i) {
        theToppings += this.$root.$data.addedToppings[i];
        if ( i < this.$root.$data.addedToppings.length - 1) {
          theToppings += ", ";
        }
      }
      let pizza = {
        name: "Custom Pizza",
        toppings: theToppings,
        price: "$11.99",
        image: 'pizza_icon.png'
      }
      this.$root.$data.cart.push(pizza);
      this.$root.$data.addedToppings.splice(0, this.$root.$data.addedToppings.length);
    }
  },
  computed: {
    toppings() {
      return this.$root.$data.toppings;
    }
  },
}
</script>

<style scoped>
button {
  height: 75px;
  width: 150px;
  background: Khaki;
  color: black;
  border: none;
  border-radius: 25px;
  font-size: 30px;
}

.auto {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
</style>
