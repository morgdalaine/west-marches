<template>
  <div class="feature"
       :class="'feature--' + category">
    <h3 class="feature__category">{{ category }}</h3>
    <span class="feature__subcategory"
          v-html="subcategory" />
    <br>
    <span class="feature__feature"
          v-html="feature" />
  </div>
</template>

<script setup lang="ts">
import { getRegionalFeature, transformHTML } from '@/enums/regionalFeatures';
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

const generateFeature = (safety: number) => {
  const [cate, subcat, feat] = getRegionalFeature(safety);
  category.value = cate;
  subcategory.value = subcat;
  feature.value = transformHTML(feat);
};

onMounted(() => generateFeature(props.safety));
</script>

<style scoped lang="scss">
.feature {
  position: relative;
  padding: 0.25em 0.5em;
  font-family: "Alegreya", serif;

  flex: 1;
  border: 1px solid var(--color-border);

  &__category {
    position: absolute;

    top: -1em;
    right: 1em;
    padding-inline: 0.25em;

    background-color: var(--color-background);
    font-style: normal;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.8em;
    letter-spacing: 0.5px;
  }
  &__subcategory {
    text-transform: uppercase;
    font-weight: 700;

    &:empty + br {
      display: none;
    }
  }
  &__feature {
    font-style: italic;

    > em {
      color: yellow !important;
    }
  }

}

span + span {
  &::before {
    content: " ";
  }
}
</style>
