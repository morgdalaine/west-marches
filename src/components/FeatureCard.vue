<template>
  <div class="feature">
    <h3 class="feature__category">{{ category }}</h3>
    <span class="feature__subcategory">{{ subcategory }}</span>
    <br>
    <span class="feature__feature">{{ feature }}</span>
  </div>
</template>

<script setup lang="ts">
import { dieN } from '@/composables/dice';
import { getArea } from '@/enums/regions/areas';
import { generateFactionPresence } from '@/enums/regions/factionPresence';
import { getHazard } from '@/enums/regions/hazards';
import { getObstacle } from '@/enums/regions/obstacles';
import { generatePlaceName } from '@/enums/regions/places';
import { getSite } from '@/enums/regions/sites';
import { onMounted, ref, type Ref } from 'vue';

const props = defineProps({
  safety: {
    type: Number,
    required: true,
  },
});

const category: Ref<string> = ref('');
const subcategory: Ref<string> = ref('');
const feature: Ref<string> = ref('');

const generate = (safety: number) => {
  const categoryN = dieN(12) + safety;
  const subcategoryN = dieN(10);
  const featureN = dieN(8);

  switch (categoryN + 1) {
    case 1:
    case 2:
    case 3:
    case 4:
      category.value = 'creature';
      subcategory.value = '';
      feature.value = '';
      break;
    case 5: {
      category.value = 'hazard';
      const [subcat, feat] = getHazard(subcategoryN, featureN);
      subcategory.value = subcat ?? '';
      feature.value = feat ?? '';
      break;
    }
    case 6: {
      category.value = 'obstacle';
      const [subcat, feat] = getObstacle(subcategoryN, featureN);
      subcategory.value = subcat ?? '';
      feature.value = feat ?? '';
      break;
    }
    case 7: {
      category.value = 'area';
      const [subcat, feat] = getArea(subcategoryN, featureN);
      subcategory.value = subcat ?? '';
      feature.value = feat ?? '';
      break;
    }
    case 8: {
      category.value = 'named place';
      subcategory.value = generatePlaceName();
      break;
    }
    case 9:
    case 10:
    case 11: {
      category.value = 'site';
      const [subcat, feat] = getSite(subcategoryN, featureN);
      subcategory.value = subcat ?? '';
      feature.value = feat ?? '';
      break;
    }
    default: {
      category.value = 'faction presence';
      const [subcat, feat] = generateFactionPresence(subcategoryN, featureN);
      subcategory.value = subcat ?? '';
      feature.value = feat ?? '';

      break;
    }
  }
};

onMounted(() => generate(props.safety));
</script>

<style scoped lang="scss">
.feature {
  font-family: "Alegreya", serif;
  &__category {
    text-transform: uppercase;
    font-weight: 700
  }
  &__subcategory {
    text-transform: capitalize;
    color: white;
  }
  &__feature {
    font-style: italic;
    color: white;
  }
}

span + span {
  &::before {
    content: " ";
  }
}
</style>
