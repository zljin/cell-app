<script setup>

import { userAdminStore } from '@/stores/admin/admin.js'

const adminStore = userAdminStore()

adminStore.save("admin", "qwerqwer", "2025-03-23")

console.log(adminStore.data);


</script>

<template>
登录界面123 <br>

<el-icon><User /></el-icon>

<hr>

<el-button type="primary">登录</el-button>
</template>

<style scoped>

</style>
