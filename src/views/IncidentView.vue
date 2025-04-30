<template>
  <div class="incident">
    <el-button-group>
      <el-button type="success"
                 @click="generateIncidents(IncidentCategoryEnum.SETTLEMENT)">Generate {{ IncidentCategoryEnum.SETTLEMENT }}</el-button>
      <el-button type="primary"
                 @click="generateIncidents(IncidentCategoryEnum.ROAD)">{{ IncidentCategoryEnum.ROAD }}</el-button>
      <el-button type="warning"
                 @click="generateIncidents(IncidentCategoryEnum.WILDERNESS)">{{ IncidentCategoryEnum.WILDERNESS }}</el-button>
      <el-button type="danger"
                 @click="generateIncidents(IncidentCategoryEnum.DUNGEON)">{{ IncidentCategoryEnum.DUNGEON }}</el-button>
    </el-button-group>

    <br />
    <h2 class="incident__table">{{ table }}</h2>

    <IncidentCard :table="table"
                  :key="uuid" />
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
}
</style>
