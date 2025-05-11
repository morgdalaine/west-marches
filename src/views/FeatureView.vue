<template>
  <div class="feature">
    <el-button-group>
      <el-button type="success"
                 @click="generateFeature(3)">Generate Safe</el-button>
      <el-button type="primary"
                 @click="generateFeature(2)">Unsafe</el-button>
      <el-button type="warning"
                 @click="generateFeature(1)">Dangerous</el-button>
      <el-button type="danger"
                 @click="generateFeature(0)">Perilous</el-button>
    </el-button-group>

    <br />
    <br />

    <div class="feature__list">
      <div v-for="n in 6"
           :key="n + uuid">

        <FeatureCard :safety="safety"
                     :key="uuid" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import FeatureCard from '@/components/FeatureCard.vue';
import { onMounted, ref, type Ref } from 'vue';

const uuid = ref(0);
const safety: Ref<number> = ref(0);

const generateFeature = (value: number) => {
  safety.value = value;
  uuid.value = safety.value + new Date().getMilliseconds();
};

onMounted(() => generateFeature(safety.value));
</script>

<style scoped lang="scss">
@use "../scss/vars.scss" as vars;

.feature {
  font-family: "Alegreya", serif;

  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin: 1rem 0;
  }
}
</style>
