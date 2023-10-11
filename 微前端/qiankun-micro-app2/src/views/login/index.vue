<template>
  <div class="login">
    <h1>会议室预订系统</h1>
    <el-form
      :model="form"
      label-width="120px"
      hide-required-asterisk="true"
      require-asterisk-position="left"
    >
      <el-form-item label="用户名">
        <el-input
          v-model="form.username"
          class="w-50 m-2"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          v-model="form.password"
          class="w-50 m-2"
          placeholder="请输入密码"
          type="password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="btn">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ElMessage } from "element-plus";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { login } from "@/api";

import useUserStore from "@/store/modules/user";
const $router = useRouter();
const userStore = useUserStore();
const form = reactive({
  username: "zhangsan",
  password: "123456",
});

const onSubmit = async () => {
  const res = await login(form.username, form.password);
  console.log(res);
  const { data } = res.data;
  if (res.status === 201 || res.status === 200) {
    ElMessage({
      message: "Congrats, this is a success message.",
      type: "success",
    });

    localStorage.setItem("access_token", data.accessToken);
    localStorage.setItem("refresh_token", data.refreshToken);
    localStorage.setItem("user_info", JSON.stringify(data.userInfo));
    userStore.setUserInfo(data.userInfo);
    setTimeout(() => {
      $router.push("/");
    }, 1000);
  } else {
    ElMessage.error("Oops, this is a error message.");
  }
};
</script>

<style scoped>
.login {
  width: 400px;
  margin: 100px auto 0 auto;
  text-align: center;

  .btn {
    width: 100%;
  }
}
</style>
