<template>
  <span class="root_container">
    <span class="main_background">
    </span>
        <router-link
        to="/"
        v-slot="{ href, navigate }"
        custom
        >
        <li class="link-home hidden" @click="toogleVisibility">
            <a :href="href"  @click="navigate">Home</a>
        </li>
        </router-link>
        <router-link
        to="/Planets"
        v-slot="{ href, navigate }"
        custom
        >
        <li class="link-planets" @click="toogleVisibility">
            <a :href="href" @click="navigate">Enter</a>
        </li>
        </router-link>
    <router-view/>
    <Footer/>
  </span>
</template>

<script>
import router from '../router/router'
import Footer from '../components/Footer'
import renderModel from '../helpers/renderModel'

export default {
  name: 'Root',
  components: {
    Footer
  },
  methods: {
    toogleVisibility () {
      const image = document.querySelector('.main_background')
      const homeBtn = document.querySelector('.link-home')
      const planetsBtn = document.querySelector('.link-planets')
      const canvas = document.querySelector('.model')

      if (router.currentRoute.name === 'Planets') {
        image.classList.add('invisible')
        canvas.classList.add('invisible')
        homeBtn.classList.remove('hidden')
        planetsBtn.classList.add('hidden')
      } else {
        image.classList.remove('invisible')
        canvas.classList.remove('invisible')
        planetsBtn.classList.remove('hidden')
        homeBtn.classList.add('hidden')
      }
    }
  },
  mounted () {
    renderModel()
  }
}
</script>

<style lang="sass" src="../assets/styles/index.sass"></style>
