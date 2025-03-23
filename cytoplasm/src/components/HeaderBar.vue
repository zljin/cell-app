<script setup>

import { inject } from 'vue'

const userCommand = (command) => {
    console.log("command:", command)
}

const userInfo = inject("provideUserInfo")

</script>

<template>

    <el-dropdown @command="userCommand">
        <span class="dropdown-trigger">
            {{userInfo.name}} 个人中心
            <el-icon>
                <User />
            </el-icon>
        </span>

        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item command="order">订单</el-dropdown-item>
                <el-dropdown-item command="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>

</template>

<style scoped>
.dropdown-trigger {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    font-weight: 500;
    color: #333;
    cursor: pointer;
}

.dropdown-trigger:hover {
    color: #409eff; /* Element Plus primary color */
}

el-dropdown-menu {
    min-width: 120px;
}

el-dropdown-item {
    font-size: 14px;
    padding: 10px 16px;
}

el-dropdown-item:hover {
    background-color: #f5f7fa;
}
</style>
