<template>
  <div class="PlanetsList">
    <div class="table">
      <div class="loading_screen" v-if="loading">
       <h4>Loading...</h4>
      </div>
      <el-table
         :data="planets"
         v-else>
         <el-table-column
            prop="name"
            label="Name"
            sortable>
         </el-table-column>
         <el-table-column
            prop="rotation_period"
            label="Rotation period"
            sortable>
         </el-table-column>
         <el-table-column
            prop="climate"
            label="Climate"
            sortable>
         </el-table-column>
         <el-table-column
            prop="gravity"
            label="Gravity"
            sortable>
         </el-table-column>
         <el-table-column
            prop="created"
            label="Created"
            sortable>
         </el-table-column>
         <el-table-column
            prop="url"
            label="Link"
            sortable>
         </el-table-column>
      </el-table>
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
  </div>
</template>
<style src="./style.sass" lang="sass"></style>
<script src="./component.js" />
