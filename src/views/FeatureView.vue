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
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const props = defineProps({
  safety: {
    type: Number,
    required: true,
  },
});

const generateFeature = (safety: number) => {
};

onMounted(() => generateFeature(props.safety));
</script>

<style scoped lang="scss">
@use "../scss/vars.scss" as vars;

.feature {
  font-family: "Alegreya", serif;
}
</style>
