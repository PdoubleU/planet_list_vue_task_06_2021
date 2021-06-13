<template>
  <span class="root_container">
    <span class="main_background">
    </span>
        <router-link
        to="/"
        v-slot="{ href, navigate, isActive }"
        custom
        >
        <li class="link-home hidden" @click="toogleVisibility">
            <a :href="href" :active="isActive" @click="navigate">Home</a>
        </li>
        </router-link>
        <router-link
        to="/Planets"
        v-slot="{ href, navigate }"
        custom
        >
        <li class="link-planets" @click="toogleVisibility">
            <a :href="href" @click="navigate">Planets</a>
        </li>
        </router-link>
    <router-view/>
  </span>
</template>

<script>
import router from '../router/router'

export default {
  name: 'Root',
  isActive: null,
  methods: {
    toogleVisibility () {
      const image = document.querySelector('.main_background')
      const homeBtn = document.querySelector('.link-home')
      const planetsBtn = document.querySelector('.link-planets')

      if (router.currentRoute.name === 'Planets') {
        image.classList.add('invisible')
        homeBtn.classList.remove('hidden')
        planetsBtn.classList.add('hidden')
      } else {
        image.classList.remove('invisible')
        planetsBtn.classList.remove('hidden')
        homeBtn.classList.add('hidden')
      }
    }
  }
}
</script>

<style lang="sass" src="../assets/styles/index.sass"></style>
