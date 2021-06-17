<template>
  <div class="PlanetsList">
    <div class="table" v-if="transitionEnd">
      <Loading v-bind:loading="loading"/>
      <el-input
        placeholder="Look for anything..."
        v-model="search"
        prefix-icon="el-icon-search"
        @input="filterData"
        clearable
      ></el-input>
      <Table
         :planets="filterData(planets, search)"
         :loading="loading"/>
      <Pagination
         :fetch-data="fetchData"
         :total="total"/>
    </div>
  </div>
</template>

<script src="./component.js" />

<style src="./style.sass" lang="sass" scoped></style>
