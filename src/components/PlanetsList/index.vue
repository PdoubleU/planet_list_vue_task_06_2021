<template>
  <div class="PlanetsList">
    <div class="table" v-if="transitionEnd">
      <Loading v-bind:loading="loading"/>
      <Table
         v-bind:planets="planets"
         v-bind:loading="loading"/>
      <Pagination
         v-bind:fetch-data="fetchData"
         v-bind:total="total"/>
    </div>
  </div>
</template>
<style src="./style.sass" lang="sass"></style>
<script src="./component.js" />
