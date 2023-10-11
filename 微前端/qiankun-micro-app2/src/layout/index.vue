<template>
  <div class="common-layout">
    <el-container v-if="isQiankun">
      <el-main>
        <router-view />
      </el-main>
    </el-container>

    <el-container v-else>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Aside />
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import Header from "./modules/Header.vue";
import Aside from "./modules/Aside.vue";
const isQiankun = window.__POWERED_BY_QIANKUN__;
</script>

<style scoped>
.common-layout {
  height: 100%;
  .el-header {
    padding: 0;
  }
  .el-aside {
    height: 503px;
  }
}
</style>
