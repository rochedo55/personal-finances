<template>
  <div id="container">
    <Header />
    <SideMenu currentPage="home" />
    <div class="inner">
        <Home />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import SideMenu from './components/SideMenu.vue'
import Home from './components/Home.vue'


export default {
  name: 'App',
  components: {
    Header,
    SideMenu,
    Home
  }
}
</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');


  * {
      border: 0;
      padding: 0;
      margin: 0;
  }

  body{
      background-color: #DDD;
      font-family: 'Roboto', sans-serif;
  }

  button:focus {
      outline: none;
  }

  .row{
      display: flex;
      width: 100%;
      flex-wrap: wrap;
  }

  .inner{
      margin-left: 90px;
      margin-top: 73px;
  }
</style>
