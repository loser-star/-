<template>
  <div class="header">
    <div>会议室预订管理系统</div>
    <div class="micro-app-popup">
      <el-dropdown>
        <el-avatar :size="40" :src="headPic" />

        <template #dropdown class="micro-app-popup">
          <el-dropdown-menu class="micro-app-popup">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import useUserStore from "@/store/modules/user";
const userStore = useUserStore();
console.log(userStore.userInfo.headPic);
const headPic = reactive("http://localhost:4000/" + userStore.userInfo.headPic);
</script>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  background-color: #409eff;
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  box-sizing: border-box;
}
</style>
