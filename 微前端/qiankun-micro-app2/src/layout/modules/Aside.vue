<template>
  <div class="Aside">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
          router
        >
          <el-menu-item index="/reservation">
            <el-icon><icon-menu /></el-icon>
            <span>预约管理</span>
          </el-menu-item>
          <el-menu-item index="/statistics">
            <el-icon><document /></el-icon>
            <span>统计</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>

<style scoped>
.Aside {
  height: 100%;
  background-color: #545c64;
}
</style>
