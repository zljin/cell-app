<script setup>
import { inject } from 'vue'
import Content1 from '@/components/Content1.vue';
import Content2 from '@/components/Content2.vue';
const selectedIndex = inject("provideSelectedIndex")


</script>

<template>

    <template v-if="selectedIndex.index === '1'">
        <Content1 />
    </template>
    <template v-else-if="selectedIndex.index === '3'">
        <Content2 />
    </template>
    <template v-else>
        <p>欢迎来到仪表盘！{{ selectedIndex.indexPath }}</p>
    </template>
</template>

<style scoped></style>
