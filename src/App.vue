<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <img src="/images/pizza_icon.png">
      </router-link>
    </div>
    <div id="side">
      <router-link to="/build-own">
        <div class="menu-item browse">
          <img src="/images/rolling_pin.png">
          <p>Build Your Own</p>
        </div>
      </router-link>
      <router-link to="/pizzas">
        <div class="menu-item">
          <img src="/images/pizza_slice.png">
          <p>Your Pizzas</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
</div>
</template>

<style>
* {
  box-sizing: border-box;
  font-family: 'Alegreya Sans SC';
}

body {
  margin: 50px 100px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
.footer {
  display: flex;
  justify-content: space-between;
  background-color: IndianRed;
  height: 60px;
  margin-top: 30px;
  padding: 3px;
  border-radius: 25px;
}

.footer-text {
  color: Black;
  font-size: 18px;
  margin: 10px;
}

.footer-text:hover {
  color: DarkOrchid;
  text-decoration: none;
}

</style>
