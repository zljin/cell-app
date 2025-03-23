<script setup>

import { userStore } from '@/stores/user.js'
import { appName } from '@/config/appConst.js' 
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const form = reactive({ name: "", password: "" })
const us = userStore()
const router = useRouter()


const handleLogin = () => {
  if (form.password === "admin") {
    // us.save(form.name, "token1", "2025-03-23")
    // console.log(us.data)
    router.push('/dashboard')
  } else {
    alert('密码错误，请重试！')
  }
}

</script>

<template>
  <div class="login-container">
    <h2>登录界面 {{ appName }}</h2>
    <el-form :model="form" class="login-form">
      <el-form-item label="用户名">
        <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.login-container {
  width: 300px;
  margin: 100px auto;
  text-align: center;
}

.login-form {
  margin-top: 20px;
}
</style>
