<template>
  <div class="discovery">
    <el-button type="primary"
               @click="generateDiscovery()">Generate Discovery</el-button>

    <br />
    <br />

    <DiscoveryCard :key="uuid" />
  </div>
</template>

<script setup lang="ts">
import DiscoveryCard from '@/components/DiscoveryCard.vue';
import { onMounted, ref, } from 'vue';

const uuid = ref(0);

const generateDiscovery = () => {
  uuid.value = new Date().getMilliseconds();
};

onMounted(() => generateDiscovery());
</script>

<style scoped lang="scss">
@use "../scss/vars.scss" as vars;

.discovery {
  font-family: "Alegreya", serif;
}
</style>
