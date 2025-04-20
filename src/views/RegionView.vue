<template>
  <div class="region">

    <!-- [size], [terrain], [climate], [alignment], [safety], [other tags]. -->
    <el-button type="primary"
               @click="generate()">Generate Region</el-button>
    <h1 class="region__name">{{ name }}</h1>
    <div class="region__tags">
      <span>{{ size }}</span>
      <span>{{ terrain }}</span>
      <span :class="'region__climate--' + climate">{{ climate }}</span>
      <span>{{ alignment }}</span>
      <span>{{ safety }} {{ travel }}</span>
      <br />
      <span v-for="tag in other_tags"
            :key="tag">{{ tag }}</span>
    </div>

    <!-- <span>Features: {{ regional_features }}</span> -->
    <div class="region__features">
      <div v-for="li in regional_features"
           :key="regional_features + safety_mod + li">

        <FeatureCard :safety="safety_mod"
                     :showMenu="false" />
      </div>
    </div>

    <FeatureLegend />
  </div>
</template>

<script setup lang="ts">
import { dieN } from '@/composables/dice'
import FeatureCard from '../components/FeatureCard.vue';
import FeatureLegend from '../components/FeatureLegend.vue';
import { ElButton } from 'element-plus'
import { onMounted, ref, type Ref } from 'vue'
import {
  getRegionalFeatureCount,
  getRegionAlignment,
  getRegionClimate,
  getRegionName,
  getRegionOtherTags,
  getRegionSafety,
  getRegionSize,
  getRegionTerrain,
  type RegionAlignment,
  type RegionClimate
} from '@/enums/regions';

const size: Ref<string> = ref('');
const terrain: Ref<string> = ref('');
const climate: Ref<string> = ref('');
const alignment: Ref<string> = ref('');
const safety: Ref<string> = ref('');
const travel: Ref<string> = ref('');
const other_tags: Ref<Array<string>> = ref([]);

const safety_mod: Ref<number> = ref(0);
const regional_features: Ref<number> = ref(0);

const name: Ref<string> = ref('');

const generate = () => {
  size.value = getRegionSize();
  regional_features.value = getRegionalFeatureCount(size.value);

  climate.value = getRegionClimate();
  terrain.value = getRegionTerrain(climate.value as RegionClimate);
  alignment.value = getRegionAlignment();

  const [safe, mod] = getRegionSafety(alignment.value as RegionAlignment);
  safety.value = safe;
  safety_mod.value = mod;

  other_tags.value = getRegionOtherTags(dieN(3));

  name.value = getRegionName()
}

onMounted(() => generate());

</script>

<style scoped lang="scss">
@use "../scss/vars.scss" as vars;

.region {
  font-family: "Alegreya", serif;

  &__name {
    font-family: "Averia Serif Libre", serif;
  }

  &__tags {
    span:has(+ span) {
      &::after {
        content: ", ";
      }
    }
  }
  &__climate {
    &--frigid {
      color: lightblue;
    }
    &--torrid {
      color: orange;
    }
  }
  &__features {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
