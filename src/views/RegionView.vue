<template>
  <div class="region">

    <!-- [size], [terrain], [climate], [alignment], [safety], [other tags]. -->
    <el-button type="primary"
               @click="generateRegion()">Generate Region</el-button>
    <h1 class="region__name"
        @click="cycleRegionName()">{{ name }}</h1>
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

    <br>
    <hr>
    <div class="region__features">
      <div v-for="li in regional_features"
           :key="regional_features + safety_mod + li">

        <FeatureCard :safety="safety_mod" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { dieN } from '@/composables/dice';
import FeatureCard from '@/components/FeatureCard.vue';
import { ElButton } from 'element-plus';
import { computed, onMounted, ref, type Ref } from 'vue';
import {
  getRegionalFeatureCount,
  getRegionAlignment,
  getRegionClimate,
  getRegionNameAll,
  getRegionOtherTags,
  getRegionSafety,
  getRegionSize,
  getRegionTerrain,
  type RegionAlignment,
  type RegionClimate,
} from '@/enums/regions/regions';

const size: Ref<string> = ref('');
const terrain: Ref<string> = ref('');
const climate: Ref<string> = ref('');
const alignment: Ref<string> = ref('');
const safety: Ref<string> = ref('');
const travel: Ref<string> = ref('');
const other_tags: Ref<string[]> = ref([]);

const safety_mod: Ref<number> = ref(0);
const regional_features: Ref<number> = ref(0);

const nameIndex: Ref<number> = ref(0);
const names: Ref<string[]> = ref([]);
const name = computed(() => names.value[nameIndex.value])

const generateRegion = () => {
  size.value = getRegionSize();
  regional_features.value = getRegionalFeatureCount(size.value);

  climate.value = getRegionClimate();
  terrain.value = getRegionTerrain(climate.value as RegionClimate);
  alignment.value = getRegionAlignment();

  const [safe, mod] = getRegionSafety(alignment.value as RegionAlignment);
  safety.value = safe;
  safety_mod.value = mod;

  other_tags.value = getRegionOtherTags(dieN(3));

  names.value = getRegionNameAll();
  nameIndex.value = dieN(names.value.length)
};

const cycleRegionName = () => {
  if (nameIndex.value + 1 >= names.value.length) {
    nameIndex.value = 0;
  }
  else {
    nameIndex.value++
  }
}

onMounted(() => generateRegion());
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
      font-weight: 500;
    }
    &--torrid {
      color: orange;
      font-weight: 500;
    }
  }
  &__features {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin: 1rem 0;
  }
}
</style>
