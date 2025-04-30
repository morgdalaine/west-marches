<template>
  <div class="incident"
       :class="'incident--' + category">
    <h3 class="incident__category">{{ category }}</h3>
    <span class="incident__subcategory"
          v-html="subcategory" />
    <br>
    <span class="incident__incident"
          v-html="incident" />
  </div>
</template>

<script setup lang="ts">
import { transformHTML } from '@/composables/text';
import { getIncident, type IncidentCategory } from '@/enums/incidents/incidents';
import { onMounted, ref, type Ref } from 'vue';

const props = defineProps({
  table: {
    type: String,
    required: true,
  },
});

const category: Ref<string> = ref('');
const subcategory: Ref<string> = ref('');
const incident: Ref<string> = ref('');

const generateIncident = () => {
  const array = getIncident(props.table as IncidentCategory);
  category.value = array.shift() ?? '';
  subcategory.value = array.shift() ?? '';
  incident.value = transformHTML(array.shift() ?? '');
};

onMounted(() => generateIncident());
</script>

<style scoped lang="scss">
.incident {
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
  &__incident {
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
