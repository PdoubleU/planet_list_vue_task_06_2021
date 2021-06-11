<template>
  <div id="app">
    <div class="nav">
      <el-row class="nav-container">
        <router-link to="/" class="nav-logo">Logo</router-link>
        <el-menu class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
          <el-menu-item index="2"><router-link to="/Planets">Planets</router-link></el-menu-item>
        </el-menu>
      </el-row>
    </div>
    <router-view/>
  </div>
</template>

<style lang="sass" scoped>
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: $main-color

.nav-container
  display: flex
  flex-direction: row
  justify-content: space-between
  background-color: red

.nav-logo
  background-color: white
  text-justify: center
  align-self: center
  padding: .6rem 1.1rem
  width: 5rem

</style>
