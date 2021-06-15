<template>
  <div id="app">
    <Root />
    <canvas class="model"></canvas>
  </div>
</template>

<script>
import Root from './views/Root.vue'

export default {
  name: 'App',
  components: {
    Root
  }
}
</script>

<style lang="sass" src="./assets/styles/index.sass"></style>
