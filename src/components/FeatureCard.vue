<template>
  <div class="feature">
    <h3 class="feature__category">{{ category }}</h3>
    <!-- <span class="feature__description">{{ description }}</span> -->
    <span class="feature__subcategory">{{ subcategory }}</span>
    <br>
    <span class="feature__feature">{{ feature }}</span>
  </div>
</template>

<script setup lang="ts">
import { dieN } from '@/composables/dice'
import { getArea } from '@/enums/areas';
import { getHazard } from '@/enums/hazards';
import { getObstacle } from '@/enums/obstacles';
import { generatePlaceName } from '@/enums/places';
import { onMounted, ref, type Ref } from 'vue';

const props = defineProps({
  safety: {
    type: Number,
    required: true
  }
})


const category: Ref<string> = ref('');
const subcategory: Ref<string> = ref('');
const feature: Ref<string> = ref('');

const generate = (safety: number) => {
  const categoryN = dieN(12) + safety;
  const subcategoryN = dieN(10);
  const featureN = dieN(8);

  switch (categoryN) {
    case 0:
    case 1:
    case 2:
    case 3:
      category.value = 'creature';
      break;
    case 4: {
      category.value = 'hazard';
      const [subcat, feat] = getHazard(subcategoryN, featureN);
      subcategory.value = subcat ?? "";
      feature.value = feat ?? "";
      break;
    }
    case 5: {
      category.value = 'obstacle';
      const [subcat, feat] = getObstacle(subcategoryN, featureN);
      subcategory.value = subcat ?? "";
      feature.value = feat ?? "";
      break;
    }
    case 6: {
      category.value = 'area';
      const [subcat, feat] = getArea(subcategoryN, featureN);
      subcategory.value = subcat ?? "";
      feature.value = feat ?? "";
      break;
    }
    case 7:
      category.value = 'named place';
      subcategory.value = generatePlaceName();
      break;
    case 8:
    case 9:
    case 10:
      category.value = 'site';
      break;
    case 11:
      category.value = 'faction presence';
      break;
    default:
      category.value = 'settlement';
  }


}


onMounted(() => generate(props.safety));


</script>

<style scoped lang="scss">

.feature {
  &__description {
font-style: italic;
  }
  &__subcategory {
    text-transform: uppercase;
  }
  &__category {
    text-transform: uppercase;
    font-weight: 700
  }
  &__feature {

  }
}



span + span {
  &::before {
    content: " ";
  }
}
</style>
