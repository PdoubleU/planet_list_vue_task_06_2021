<template>
  <div class="PlanetsList">
    <span
        v-loading="loading"
        element-loading-text="Loading...">
    </span>
     <ul>
       <li v-for="planet in planets" :key="planet.name">
         <p>{{ planet.name }}</p>
         <p>{{ planet.terrain }}</p>
       </li>
     </ul>
  </div>
</template>
<style src="./style.sass" lang="sass" scoped></style>
<script src="./component.js" />
