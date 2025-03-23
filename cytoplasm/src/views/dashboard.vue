<script setup>
import { reactive, ref, provide } from 'vue';
import HeaderBar from '@/components/HeaderBar.vue';
import Content1 from '@/components/Content1.vue';
import Content2 from '@/components/Content2.vue';

const userInfo = reactive({
    name: "admin",
    role: "admin"
});

const selectedIndex = reactive({
    index: "1",
    indexPath: ["1"]
});

provide('provideUserInfo', userInfo);

const defaultOpeneds = ref(["2", "3"]);

const selected = (index, indexPath) => {
    console.log(index + "===>" + indexPath);
    selectedIndex.index = index;
    selectedIndex.indexPath = indexPath;
};
</script>

<template>
    <div class="dashboard-container">
        <HeaderBar class="header-bar"></HeaderBar>
        <div class="content">
            <div class="nav">
                <el-menu :default-openeds="defaultOpeneds" @select="selected" background-color="#545c64"
                    text-color="#fff" active-text-color="#ffd04b" style="width: 200px;">
                    <el-menu-item index="1">我的工作台</el-menu-item>
                    <el-sub-menu index="2">
                        <template #title> 用户管理 </template>
                        <el-menu-item index="2-1">用户列表</el-menu-item>
                        <el-menu-item index="2-2">用户添加</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-sub-menu>
                    <el-menu-item index="3">消息中心</el-menu-item>
                    <el-menu-item index="4">订单管理</el-menu-item>
                </el-menu>
            </div>
            <div class="main-content">
                <template v-if="selectedIndex.index === '1'">
                    <Content1 />
                </template>
                <template v-else-if="selectedIndex.index === '3'">
                    <Content2 />
                </template>
                <template v-else>
                    <p>欢迎来到仪表盘！{{ selectedIndex.indexPath }}</p>
                </template>
            </div>
        </div>
    </div>
</template>

<style scoped>
.dashboard-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.header-bar {
    flex: 0 0 auto;
    background-color: #545c64;
    color: #545c64;
    padding: 10px;
    text-align: center;
}

.content {
    display: flex;
    flex: 1;
    overflow: hidden;
}

.nav {
    flex: 0 0 200px;
    background-color: #545c64;
    padding: 10px;
    border-right: 1px solid #545c64;
}

.main-content {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    background-color: #fff;
}
</style>
