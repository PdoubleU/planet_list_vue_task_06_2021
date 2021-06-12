<template>
  <div class="PlanetsList">
    <span
        v-loading="loading"
        element-loading-text="Loading...">
    </span>
     <ul>
       <li v-for="planet in planets" :key="planet.name">
         <p>{{ planet.name }}</p>
       </li>
     </ul>
    <div class="block">
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        @current-change="fetchData"
        @prev-click="fetchData"
        @next-click="fetchData">
      </el-pagination>
    </div>
  </div>
</template>
<style src="./style.sass" lang="sass" scoped></style>
<script src="./component.js" />
