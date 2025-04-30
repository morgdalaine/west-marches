import { dieArray, dieWeightedRecord, type WeightedRecord } from '@/composables/dice';

export const DISCOVERY_CATEGORY: WeightedRecord = {
  'unnatural feature': 2,
  'natural feature': 10,
  'evidence': 4,
  'structure': 4,
};

export const FEATURE_UNNATURAL: WeightedRecord = {
  'divine': 1,
  'planar': 2,
  'arcane': 9,
};
export const FEATURE_UNNATURAL_DIVINE: WeightedRecord = {
  'presence/manifestation': 1,
  'protected place': 5,
  'cursed/defiled place': 2,
  'blessed/sacred place': 2,
};
export const FEATURE_UNNATURAL_PLANAR: WeightedRecord = {
  'outpost': 1,
  'portal/gate': 2,
  'rift/tear': 3,
  'distortion/warp': 4,
};
export const FEATURE_UNNATURAL_ARCANE: WeightedRecord = {
  'blight/mutation': 4,
  'enchantment/portal': 2,
  'taint/residue': 3,
  'source/resource': 1,
};
export const FEATURE_UNNATURAL_SUBCATEGORY: Record<string, WeightedRecord> = {
  'divine': FEATURE_UNNATURAL_DIVINE,
  'planar': FEATURE_UNNATURAL_PLANAR,
  'arcane': FEATURE_UNNATURAL_ARCANE,
};

export const FEATURE_NATURAL: string[] = [
  'lair',
  'terrain change',
  'water feature',
  'landmark',
  'flora/fauna',
  'resource',
];
export const FEATURE_NATURAL_LAIR: WeightedRecord = {
  'ruin': 3,
  'cave/tunnel': 3,
  'nest/hive/aerie': 2,
  'den/burrow/warren': 2,
};
export const FEATURE_NATURAL_TERRAIN: WeightedRecord = {
  'hollow/cleft/defile': 3,
  'canyon/valley/vale/dale': 3,
  'multilevel/tiered': 1,
  'pocket of terrain': 2,
  'slope up/down': 1,
};
export const FEATURE_NATURAL_WATER: WeightedRecord = {
  'sea/ocean': 1,
  'river': 2,
  'lake/pond/mere/tarn': 2,
  'brook/stream/rill': 4,
  'spring/hot spring': 1,
};
export const FEATURE_NATURAL_LANDMARK: WeightedRecord = {
  'oddity': 1,
  'striking landscape': 3,
  'earth-based': 2,
  'plant-based': 2,
  'water-based': 2,
};
export const FEATURE_NATURAL_FLORA: WeightedRecord = {
  'notable plant/flower': 2,
  'notable tree/brush': 2,
  'notable beast': 2,
  'useful plant/herb/root': 2,
  'useful beast': 2,
};
export const FEATURE_NATURAL_RESOURCE: WeightedRecord = {
  'game/fruit/vegetable': 3,
  'timber/stone': 2,
  'herbs/spice/dye source': 2,
  'copper/tin/iron': 2,
  'gold/silver/gems': 1,
};

export const getDiscovery = () => {
  const category = getDiscoveryCategory();
  let subcategory = '';
  let feature: string | undefined;

  switch (category) {
    case 'unnatural feature':
      subcategory = getUnnaturalFeatureCategory();
      feature = dieWeightedRecord(FEATURE_UNNATURAL_SUBCATEGORY[subcategory]);
      break;
    case 'natural feature':
      break;
    case 'evidence':
      break;
    case 'structure':
      break;
  }

  return [category, subcategory, feature];
};

const getDiscoveryCategory = () => dieWeightedRecord(DISCOVERY_CATEGORY);
const getUnnaturalFeatureCategory = () => dieArray(FEATURE_NATURAL);
