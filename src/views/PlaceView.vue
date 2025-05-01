<template>
  <div class="place">

    <el-button type="primary"
               @click="generatePlace()">Generate Places</el-button>
    <br>

    <div class="place__places">
      <div v-for="n in 10"
           :key="n + uuid">

        <FeatureCard :safety=0
                     :forceCategory="RegionalFeatureEnum.NAMED_PLACE"
                     :key="uuid" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import FeatureCard from '@/components/FeatureCard.vue';
import { RegionalFeatureEnum } from '@/enums/regionalFeatures';
import { ElButton } from 'element-plus';
import { onMounted, ref } from 'vue';

const uuid = ref(0);

const generatePlace = () => {
  uuid.value = new Date().getMilliseconds();
};


onMounted(() => generatePlace());
</script>

<style scoped lang="scss">
@use "../scss/vars.scss" as vars;

.place {
  font-family: "Alegreya", serif;

  &__places {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin: 1rem 0;
  }
}
</style>
