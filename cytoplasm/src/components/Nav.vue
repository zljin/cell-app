<script setup>
import { reactive,ref,provide } from 'vue'

const defaultOpeneds = ref(["2","3"])

const emits = defineEmits(['getSelectedIndex'])

const selectedIndex = reactive({
    index: "1",
    indexPath: ["1"]
});

const selected = (index,indexPath)=>{
  console.log(index+"===>"+indexPath);
  selectedIndex.index = index;
  selectedIndex.indexPath = indexPath;

  //定义子传父属性，将选中的index传给父组件
  emits('getSelectedIndex', selectedIndex)
}


</script>

<template>
  <el-menu  
    :default-openeds="defaultOpeneds" 
    @select="selected" 
    background-color="#545c64" 
    text-color="#fff" 
    active-text-color="#ffd04b" 
    style="width: 200px;">
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
</template>

<style scoped>

</style>
