<template>
  <div class="discovery"
       :class="'discovery--' + category">
    <h3 class="discovery__category">{{ category }}</h3>
    <span class="discovery__subcategory"
          v-html="subcategory" />
    <br>
    <span class="discovery__discovery"
          v-html="discovery" />
  </div>
</template>

<script setup lang="ts">
import { transformHTML } from '@/composables/text';
import { getDiscovery } from '@/enums/discoveries';
import { onMounted, ref, type Ref } from 'vue';

const category: Ref<string> = ref('');
const subcategory: Ref<string> = ref('');
const discovery: Ref<string> = ref('');

const generateDiscovery = () => {
  const [cate, subcat, feat] = getDiscovery();
  category.value = cate;
  subcategory.value = subcat;
  discovery.value = transformHTML(feat);
};

onMounted(() => generateDiscovery());
</script>

<style scoped lang="scss">
.discovery {
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
  &__discovery {
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
