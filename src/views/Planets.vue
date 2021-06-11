<template>
  <div class="planets">
      <h2>List of planets</h2>
      <PlanetsList />
  </div>
</template>

<script>
import PlanetsList from '@/components/PlanetsList'

export default {
  name: 'Planets',
  components: {
    PlanetsList
  }
}
</script>

<style>

</style>
