<template>
  <div class="region">

    <!-- [size], [terrain], [climate], [alignment], [safety], [other tags]. -->
    <el-button @click="generate()">Generate Region</el-button>
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

    <span>Features: {{ regional_features }}</span>
    <div class="region__features">
      <div v-for="li in regional_features"
           :key="regional_features + safety_mod + li">

        <FeatureCard :safety="safety_mod" />
      </div>
    </div>

    <fieldset class="region__features-legend">
      <legend>LEGEND</legend>
      <div>
        <span class="legend__key">hazard</span>
        <br />
        <span class="legend__definition">A potentially harmful problem that must be dealt with directly.",</span></div>
      <div>
        <span class="legend__key">obstacle</span>
        <br />
        <span class="legend__definition">Any impediment to travel that must be overcome or circumnavigated.",</span></div>
      <div>
        <span class="legend__key">area</span>
        <br />
        <span class="legend__definition">A stretch of territory, distinguished from its parent region by some key difference.",</span></div>
      <div>
        <span class="legend__key">site</span>
        <br />
        <span class="legend__definition">A notable location at a specific spot on the map determined before or during play.",</span></div>
    </fieldset>

  </div>
</template>

<script setup lang="ts">
import { dieN } from '@/composables/dice'
import FeatureCard from '../components/FeatureCard.vue';
import { ElButton } from 'element-plus'
import { onMounted, ref, type Ref } from 'vue'

const SIZES: Array<string> = [
  'small',
  'sizable',
  'sizable',
  'sizable',
  'large',
  'large',
  'large',
  'large',
  'large',
  'expansive',
  'expansive',
  'vast',
];
const TERRAIN: Array<string> = [
  'water',
  'wetland',
  'lowland',
  'woodland',
  'highland',
  'wasteland',
  'underland',
];
const CLIMATE: Array<string> = [
  'frigid',
  'temperate',
  'temperate',
  'temperate',
  'temperate',
  'torrid',
  'torrid',
  'temperate',
  'temperate',
  'temperate',
  'temperate',
  'frigid',
]
const ALIGNMENT: Array<string> = ['good', 'lawful', 'neutral', 'chaotic', 'evil']
const SAFETY: Array<string> = [
  'safe',
  'unsafe',
  'unsafe',
  'dangerous',
  'dangerous',
  'dangerous',
  'dangerous',
  'dangerous',
  'dangerous',
  'perilous'
];
const OTHER_TAGS: Array<string> = [
  'barren',
  'blighted',
  'civilized',
  'disputed (claimant 1/claimant 2)',
  'defensible',
  'difficult',
  'enchanted',
  'holy (deity)',
  'property (faction or individual)',
  'resource (type)',
  'unholy (deity)',
];

const NAME_TEMPLATE: Array<string> = [
  '(The) [adjective] [terrain]',
  '(The) [adjective] [terrain]',
  '(The) [adjective] [terrain]',
  '(The) [adjective] [terrain]',
  '[terrain] of (the) [noun] ',
  '[terrain] of (the) [noun] ',
  '[terrain] of (the) [noun] ',
  'The [terrain] [adjective] ',
  '(The) [noun] [terrain]',
  '(The) [noun] [terrain]',
  '(The) [noun]’s [adjective] [terrain]',
  '[adjective] [terrain] of (the) [noun]',
];
const NAME_TERRAIN: Array<string> = [
  'Bay',
  'Morass',
  'Bluffs',
  'Mounds',
  'Bog',
  'Mountains',
  'Cliffs',
  'Peaks',
  'Desert',
  'Plains',
  'Downs',
  'Prairie',
  'Dunes',
  'Quagmire',
  'Expanse',
  'Range',
  'Fells',
  'Reach',
  'Fen',
  'Sands',
  'Flats',
  'Savanna',
  'Foothills',
  'Scarps',
  'Forest',
  'Sea',
  'Groves',
  'Slough',
  'Heath',
  'Sound',
  'Heights',
  'Steppe',
  'Hills',
  'Swamp',
  'Hollows',
  'Sweep',
  'Jungle',
  'Teeth',
  'Lake',
  'Thicket',
  'Lowland',
  'Upland',
  'March',
  'Wall',
  'Marsh',
  'Waste',
  'Meadows',
  'Wasteland',
  'Moor',
  'Woods',
];
const NAME_ADJECTIVE: Array<string> = [
  'Ageless',
  'Forgotten',
  'Ashen',
  'Forsaken',
  'Black',
  'Frozen',
  'Blessed',
  'Glittering',
  'Blighted',
  'Golden',
  'Blue',
  'Green',
  'Broken',
  'Grim',
  'Burning',
  'Holy',
  'Cold',
  'Impassable',
  'Cursed',
  'Jagged',
  'Dark',
  'Light',
  'Dead',
  'Long',
  'Deadly',
  'Misty',
  'Deep',
  'Perilous',
  'Desolate',
  'Purple',
  'Diamond',
  'Red',
  'Dim',
  'Savage',
  'Dismal',
  'Shadowy',
  'Dun',
  'Shattered',
  'Eerie',
  'Shifting',
  'Endless',
  'Shining',
  'Fallen',
  'Silver',
  'Far',
  'White',
  'Fell',
  'Wicked',
  'Flaming',
  'Yellow',
]
const NAME_NOUN: Array<string> = [
  '[Name]* ',
  'Life',
  'Ash ',
  'Light',
  'Bone ',
  'Lord',
  'Darkness ',
  'Mist',
  'Dead ',
  'Peril',
  'Death ',
  'Queen',
  'Desolation ',
  'Rain',
  'Despair ',
  'Refuge',
  'Devil ',
  'Regret',
  'Doom ',
  'Savior',
  'Dragon ',
  'Shadow',
  'Fate ',
  'Silver',
  'Fear ',
  'Skull',
  'Fire ',
  'Sky',
  'Fury ',
  'Smoke',
  'Ghost ',
  'Snake',
  'Giant ',
  'Sorrow',
  'God ',
  'Storm',
  'Gold ',
  'Sun',
  'Heaven ',
  'Thorn',
  'Hell ',
  'Thunder',
  'Honor ',
  'Traitor',
  'Hope ',
  'Troll',
  'Horror ',
  'Victory',
  'King ',
  'Witch',
];

const REGION_ALIGNMENT_MODIFIER: Record<string, number> = {
  good: -3,
  lawful: -5,
  neutral: 0,
  chaotic: 5,
  evil: 3,
}

const REGION_SAFETY_MODIFIER: Record<string, number> = {
  safe: 3,
  unsafe: 2,
  dangerous:1,
  perilous: 0,
}

// volcanic highland volcanic highland volcanic highland
// mountains/glacier mountains/glacier mountains
// mountains/glacier mountains mountains
// highland/hills highland/hills highland/hills/dunes
// highland/hills highland/hills highland/hills/dunes
// hilly boreal forest/taiga hilly forest hilly jungle/rainforest
// hilly boreal forest/taiga woodland/forest jungle/rainforest
// tundra/steppe/wasteland woodland/forest jungle/rainforest
// tundra/steppe/wasteland woodland/forest wetland/marsh/swamp
// tundra / steppe / wasteland wetland/marsh/swamp lowland/desert/flats
// boreal forest/taiga lowland/plains/prairie lowland/desert/flats
// bor v bceal forest/taiga lowland/plains/prairie lowland/desert/flats


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

const getRegionSafety = (alignment: string) => {
  const safetyIndex = dieN(SAFETY.length) + REGION_ALIGNMENT_MODIFIER[alignment];

  if (safetyIndex < 1) return SAFETY.at(0)
  if (safetyIndex >= SAFETY.length - 1) return SAFETY.at(-1);

  return SAFETY.at(safetyIndex)
}

const getRegionalFeatureCount = (size: string) => {
  if (size === "small") return dieN(4) + 1;
  if (size === "sizable") return 2 * (1 + dieN(6));
  if (size === 'expansive') return 4 * (1 + dieN(10));
  if (size === 'vast') return 5* (1 + dieN(12));

  // if (size === 'large')
  return 3 * (1 + dieN(8));
}

const generate = () => {
  size.value = SIZES.at(dieN(SIZES.length)) ?? "";
  regional_features.value = getRegionalFeatureCount(size.value);

  terrain.value = TERRAIN.at(dieN(TERRAIN.length)) ?? "";
  climate.value = CLIMATE.at(dieN(CLIMATE.length)) ?? "";
  alignment.value = ALIGNMENT.at(dieN(ALIGNMENT.length)) ?? "";

  safety.value = getRegionSafety(alignment.value) ?? "";
  safety_mod.value = REGION_SAFETY_MODIFIER[safety.value];

  const tags = [];
  for (let t = 0; t <= dieN(3); t++) {
    tags.push(OTHER_TAGS.at(dieN(OTHER_TAGS.length)) ?? "");
  }
  other_tags.value = tags;

	const template = NAME_TEMPLATE.at(dieN(NAME_TEMPLATE.length)) ?? NAME_TEMPLATE[0];
  const name_terrain = NAME_TERRAIN.at(dieN(NAME_TERRAIN.length)) ?? "";
  const name_adjective = NAME_ADJECTIVE.at(dieN(NAME_ADJECTIVE.length)) ?? "";
  const name_noun = NAME_NOUN.at(dieN(NAME_NOUN.length)) ?? "";

  name.value = template.replace("[terrain]", name_terrain).replace("[adjective]", name_adjective).replace("[noun]", name_noun);

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
    span + span {
      &::before {
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

  &__features-legend {
    border: 2px solid white;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
    padding: 1em;
    margin-block: 1em;

    legend {
      padding-inline: 1em;
        color: white;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 0.8em;

    }

    .legend {
      &__key {
        color: white;
        font-weight: 700;
        text-transform: uppercase;
      }
    }
  }
}

</style>
