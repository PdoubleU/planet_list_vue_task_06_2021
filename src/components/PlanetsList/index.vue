<template>
  <div class="PlanetsList">
    <div class="table" v-if="transitionEnd">
      <Loading v-bind:loading="loading"/>
      <el-input
        class="search_bar"
        placeholder="Searching..."
        v-model="search"
        prefix-icon="el-icon-search"
        @input="filterData"
        clearable
      ></el-input>
      <Table
         :planets="filterData(planets, search)"
         :loading="loading"
         :isMobile="isMobile"/>
      <Pagination
         :fetch-data="fetchData"
         :total="total"/>
    </div>
  </div>
</template>

<script src="./component.js" />

<style src="./style.sass" lang="sass"></style>
