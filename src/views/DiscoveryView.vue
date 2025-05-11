<template>
  <div class="discovery">
    <el-button type="primary"
               @click="generateDiscovery()">Generate Discovery</el-button>

    <br />
    <br />

    <div class="discovery__list">
      <div v-for="n in 6"
           :key="n + uuid">

        <DiscoveryCard :key="uuid" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import DiscoveryCard from '@/components/DiscoveryCard.vue';
import { onMounted, ref } from 'vue';

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

  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin: 1rem 0;
  }
}
</style>
