<template>
  <div class="incident">
    <el-button-group>
      <el-button @click="generateIncidents(IncidentCategoryEnum.SETTLEMENT)">Generate {{ IncidentCategoryEnum.SETTLEMENT }}</el-button>
      <el-button @click="generateIncidents(IncidentCategoryEnum.ROAD)">{{ IncidentCategoryEnum.ROAD }}</el-button>
      <el-button @click="generateIncidents(IncidentCategoryEnum.WILDERNESS)">{{ IncidentCategoryEnum.WILDERNESS }}</el-button>
      <el-button @click="generateIncidents(IncidentCategoryEnum.DUNGEON)">{{ IncidentCategoryEnum.DUNGEON }}</el-button>
    </el-button-group>

    <br />
    <h2 class="incident__table">{{ table }}</h2>

    <div class="incident__list">
      <div v-for="n in 6"
           :key="n + uuid">

        <IncidentCard :table="table"
                      :key="uuid" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IncidentCard from '@/components/IncidentCard.vue';
import { IncidentCategoryEnum, type IncidentCategory } from '@/enums/incidents/incidents';
import { onMounted, ref } from 'vue';

const uuid = ref(0);
const table = ref('');

const generateIncidents = (category: IncidentCategory) => {
  table.value = category;
  uuid.value = new Date().getMilliseconds();
};

onMounted(() => generateIncidents(IncidentCategoryEnum.SETTLEMENT));
</script>

<style scoped lang="scss">
@use "../scss/vars.scss" as vars;

.incident {
  font-family: "Alegreya", serif;
  &__table {
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 2px;
    color: var(--color-text);
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin: 1rem 0;
  }
}
</style>
