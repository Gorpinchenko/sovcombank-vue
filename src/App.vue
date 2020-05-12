<template>
  <div id="app">
    <Search/>
  </div>
</template>

<script>
  import Search from './components/search/TheSearch'

  export default {
    name: 'App',
    components: {
      Search
    }
  }
</script>

<style>
  body {
    font-family: 'PT Sans', sans-serif;
  }
</style>