<script setup>
import { reactive, ref, provide } from 'vue';
import HeaderBar from '@/components/HeaderBar.vue';
import Nav from '@/components/Nav.vue';
import MainContent from '@/components/MainContent.vue';

const userInfo = reactive({
    name: "admin",
    role: "admin"
});

provide('provideUserInfo', userInfo);

const selectedIndex = reactive({
    index: "1",
    indexPath: ["1"]
});


const emitsSelectIndex = (data)=>{
    console.log("Data:"+data.index+"===>"+data.indexPath);
    selectedIndex.index = data.index;
    selectedIndex.indexPath = data.indexPath;
}

provide('provideSelectedIndex', selectedIndex);


</script>

<template>
    <div class="dashboard-container">
        <HeaderBar class="header-bar"></HeaderBar>
        <div class="content">
            <Nav @getSelectedIndex="emitsSelectIndex"></Nav>
            
            <div class="main-content">
                <MainContent/>
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
