<template>

  <div id="app">
    <NavBar/>
    <router-view/>
  </div>

</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    font-family: Arial;
    background-color: #efefef
  }

  #page-wrap {
    margin: auto;
    max-width: 800px;
    min-height: 100vh;
  }

  button {
    background-color: purple;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    outline: 0;
    padding: 16px;
  }
  button:hover{
    background-color: orange;
  }
</style>
