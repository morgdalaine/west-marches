<template>
  <div class="mishap">

    <el-button type="primary"
               @click="generateMishap()">Generate Mishaps</el-button>
    <br>

    <div class="mishap__list">
      <div v-for="n in 6"
           :key="n + uuid">

        <IncidentCard :table="IncidentCategoryEnum.SETTLEMENT"
                      :forceEvent="IncidentEnum.MISHAP"
                      :key="uuid" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import IncidentCard from '@/components/IncidentCard.vue';
import { IncidentCategoryEnum, IncidentEnum } from '@/enums/incidents/incidents';
import { ElButton } from 'element-plus';
import { onMounted, ref } from 'vue';

const uuid = ref(0);

const generateMishap = () => {
  uuid.value = new Date().getMilliseconds();
};


onMounted(() => generateMishap());
</script>

<style scoped lang="scss">
@use "../scss/vars.scss" as vars;

.mishap {
  font-family: "Alegreya", serif;

  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin: 1rem 0;
  }
}
</style>
