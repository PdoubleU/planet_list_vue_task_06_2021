<template>
  <span class="root_container">
    <span class="main_background">
    </span>
        <router-link
        to="/"
        v-slot="{ href, navigate, isActive }"
        custom
        >
        <li class="link-home" @click="closeBackground">
            <a :href="href" :active="isActive" @click="navigate">Home</a>
        </li>
        </router-link>

        <router-link
        to="/Planets"
        v-slot="{ href, navigate }"
        custom
        >
        <li class="link-planets" @click="closeBackground">
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
    closeBackground () {
      const image = document.querySelector('.main_background')
      router.currentRoute.name === 'Planets' ? image.classList.add('invisible') : image.classList.remove('invisible')
    }
  }
}
</script>

<style lang="sass" src="../assets/styles/index.sass"></style>
