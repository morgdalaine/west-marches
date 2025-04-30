import { dieArray, dieWeightedRecord, type WeightedRecord } from '@/composables/dice';
import type { ObjectValues } from './enums';
import { getDetailOddity, getDetailTerrain } from './details';
import { getBeastPromptSinglet, getCreatureSinglet } from './creatures';
import { getSiteFeature, SITE_RUIN } from './regions/sites';

export const DiscoveryEnum = {
  UNNATURAL_FEATURE: 'unnatural feature',
  NATURAL_FEATURE: 'natural feature',
  EVIDENCE: 'evidence',
  STRUCTURE: 'structure',
} as const;
export type Discovery = ObjectValues<typeof DiscoveryEnum>;

export const FeatureUnnaturalEnum = {
  DIVINE: 'divine',
  PLANAR: 'planar',
  ARCANE: 'arcane',
} as const;
export type FeatureUnnatural = ObjectValues<typeof FeatureUnnaturalEnum>;

export const FeatureNaturalEnum = {
  LAIR: 'lair',
  TERRAIN_CHANGE: 'terrain change',
  WATER_FEATURE: 'water feature',
  LANDMARK: 'landmark',
  FLORA_FAUNA: 'flora/fauna',
  RESOURCE: 'resource',
} as const;
export type FeatureNatural = ObjectValues<typeof FeatureNaturalEnum>;

export const EvidenceEnum = {
  TRACKS_SPOOR: 'tracks/spoor',
  REMAINS_DEBRIS: 'remains/debris',
  STASH_CACHE: 'stash/cache',
} as const;
export type Evidence = ObjectValues<typeof EvidenceEnum>;

export const StructureEnum = {
  ENIGMATIC: 'enigmatic',
  INFRASTRUCTURE: 'infrastructure',
  DWELLING: 'dwelling',
  RELIGIOUS: 'religious',
  RUIN: 'ruin',
  SETTLEMENT: 'settlement',
} as const;
export type Structure = ObjectValues<typeof StructureEnum>;

export const DISCOVERY_CATEGORY: WeightedRecord = {
  [DiscoveryEnum.UNNATURAL_FEATURE]: 2,
  [DiscoveryEnum.NATURAL_FEATURE]: 10,
  [DiscoveryEnum.EVIDENCE]: 4,
  [DiscoveryEnum.STRUCTURE]: 44444,
};
export const FEATURE_UNNATURAL: WeightedRecord = {
  [FeatureUnnaturalEnum.DIVINE]: 1,
  [FeatureUnnaturalEnum.PLANAR]: 2,
  [FeatureUnnaturalEnum.ARCANE]: 9,
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
  [FeatureUnnaturalEnum.DIVINE]: FEATURE_UNNATURAL_DIVINE,
  [FeatureUnnaturalEnum.PLANAR]: FEATURE_UNNATURAL_PLANAR,
  [FeatureUnnaturalEnum.ARCANE]: FEATURE_UNNATURAL_ARCANE,
};
export const FEATURE_NATURAL: string[] = [
  FeatureNaturalEnum.LAIR,
  FeatureNaturalEnum.LAIR,
  FeatureNaturalEnum.LAIR,
  FeatureNaturalEnum.LAIR,
  FeatureNaturalEnum.LAIR,
  FeatureNaturalEnum.LAIR,
  FeatureNaturalEnum.LAIR,
  FeatureNaturalEnum.LAIR,
  FeatureNaturalEnum.LAIR,
  FeatureNaturalEnum.TERRAIN_CHANGE,
  FeatureNaturalEnum.WATER_FEATURE,
  FeatureNaturalEnum.LANDMARK,
  FeatureNaturalEnum.FLORA_FAUNA,
  FeatureNaturalEnum.RESOURCE,
];
export const FEATURE_NATURAL_LAIR: WeightedRecord = {
  'ruin': 3,
  'cave/tunnel': 3,
  'nest/hive/aerie': 2,
  'den/burrow/warren': 2,
};
export const FEATURE_NATURAL_TERRAIN_CHANGE: WeightedRecord = {
  'hollow/cleft/defile': 3,
  'canyon/valley/vale/dale': 3,
  'multilevel/tiered': 1,
  'pocket of terrain': 2,
  'slope up/down': 1,
};
export const FEATURE_NATURAL_WATER_FEATURE: WeightedRecord = {
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
export const FEATURE_NATURAL_FLORA_FAUNA: WeightedRecord = {
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
export const FEATURE_NATURAL_SUBCATEGORY: Record<string, WeightedRecord> = {
  [FeatureNaturalEnum.LAIR]: FEATURE_NATURAL_LAIR,
  [FeatureNaturalEnum.TERRAIN_CHANGE]: FEATURE_NATURAL_TERRAIN_CHANGE,
  [FeatureNaturalEnum.WATER_FEATURE]: FEATURE_NATURAL_WATER_FEATURE,
  [FeatureNaturalEnum.LANDMARK]: FEATURE_NATURAL_LANDMARK,
  [FeatureNaturalEnum.FLORA_FAUNA]: FEATURE_NATURAL_FLORA_FAUNA,
  [FeatureNaturalEnum.RESOURCE]: FEATURE_NATURAL_RESOURCE,
};
export const EVIDENCE: WeightedRecord = {
  [EvidenceEnum.TRACKS_SPOOR]: 6,
  [EvidenceEnum.REMAINS_DEBRIS]: 4,
  [EvidenceEnum.STASH_CACHE]: 2,
};
export const EVIDENCE_TRACKS_SPOOR: WeightedRecord = {
  'trail of blood/fluid': 2,
  'signs of violence': 2,
  'multiple/many signs': 2,
  'definite/recent/clear': 2,
};
export const EVIDENCE_REMAINS_DEBRIS: WeightedRecord = {
  'faint/old/unclear': 2,
  'bones of creature': 4,
  'creature corpse/carcass': 2,
  'junk/refuse': 2,
  '1d6 personal items': 1,
  'lost trade good': 1,
};
export const EVIDENCE_STASH_CACHE: WeightedRecord = {
  'roll 1d4 stash booty': 4,
  'roll 1d6 stash booty': 2,
  'roll 1d8 stash booty': 2,
  'roll 1d10 stash booty': 1,
  'roll 1d12 stash booty': 1,
};
export const EVIDENCE_SUBCATEGORY: Record<string, WeightedRecord> = {
  [EvidenceEnum.TRACKS_SPOOR]: EVIDENCE_TRACKS_SPOOR,
  [EvidenceEnum.REMAINS_DEBRIS]: EVIDENCE_REMAINS_DEBRIS,
  [EvidenceEnum.STASH_CACHE]: EVIDENCE_STASH_CACHE,
};

export const STRUCTURE: WeightedRecord = {
  [StructureEnum.ENIGMATIC]: 1,
  [StructureEnum.INFRASTRUCTURE]: 2,
  [StructureEnum.DWELLING]: 2,
  [StructureEnum.RELIGIOUS]: 2,
  [StructureEnum.RUIN]: 4,
  [StructureEnum.SETTLEMENT]: 1,
};
export const STRUCTURE_ENIGMATIC: WeightedRecord = {
  'oddity': 2,
  'mound/earthworks': 3,
  'monument/megalith': 3,
  'statue/idol/totem': 2,
};
export const STRUCTURE_INFRASTRUCTURE: WeightedRecord = {
  'signpost/marker': 3,
  'bridge/aqueduct': 2,
  'track/path/trail/road': 4,
  'mine/quarry': 1,
};
export const STRUCTURE_DWELLING: WeightedRecord = {
  'campsite/hovel/hut': 4,
  'homestead/farmstead': 3,
  'inn/toll house/mill': 2,
  'tower/keep/castle': 1,
};
export const STRUCTURE_RELIGIOUS: WeightedRecord = {
  'grave marker': 3,
  'graveyard/burial ground': 2,
  'tomb/crypt/barrow': 2,
  'temple/monastery': 2,
  'great temple/sanctuary': 1,
};
export const STRUCTURE_RUIN: WeightedRecord = {
  'ruin dungeon': 3,
  'ruin settlement': 2,
  'ruin religious (1d8+4)': 2,
  'ruin dwelling (1d8+4)': 2,
  'ruin infrastructure (1d8+4)': 1,
};
export const STRUCTURE_SETTLEMENT: WeightedRecord = {
  'hamlet': 3,
  'village': 3,
  'keep': 2,
  'town': 1,
  'city': 1,
};
export const STRUCTURE_SUBCATEGORY: Record<string, WeightedRecord> = {
  [StructureEnum.ENIGMATIC]: STRUCTURE_ENIGMATIC,
  [StructureEnum.INFRASTRUCTURE]: STRUCTURE_INFRASTRUCTURE,
  [StructureEnum.DWELLING]: STRUCTURE_DWELLING,
  [StructureEnum.RELIGIOUS]: STRUCTURE_RELIGIOUS,
  [StructureEnum.RUIN]: STRUCTURE_RUIN,
  [StructureEnum.SETTLEMENT]: STRUCTURE_SETTLEMENT,
};
export const getDiscoveryCategory = () => dieWeightedRecord(DISCOVERY_CATEGORY);
export const getUnnaturalFeatureCategory = () => dieWeightedRecord(FEATURE_UNNATURAL);
export const getNaturalFeatureCategory = () => dieArray(FEATURE_NATURAL);
export const getEvidenceCategory = () => dieWeightedRecord(EVIDENCE);
export const getStructureCategory = () => dieWeightedRecord(STRUCTURE);

export const getDiscovery = () => {
  const category = getDiscoveryCategory();

  switch (category) {
    case DiscoveryEnum.UNNATURAL_FEATURE: {
      const subcategory = getUnnaturalFeatureCategory();
      const feature = dieWeightedRecord(FEATURE_UNNATURAL_SUBCATEGORY[subcategory]);
      return [category, subcategory, feature];
    }
    case DiscoveryEnum.NATURAL_FEATURE: {
      const subcategory = getNaturalFeatureCategory();
      const feature = dieWeightedRecord(FEATURE_NATURAL_SUBCATEGORY[subcategory]);
      return [
        category,
        subcategory,
        feature
          .replace('ruin', `RUIN ${getSiteFeature(SITE_RUIN)}`)
          .replace('terrain', getDetailTerrain())
          .replace('oddity', `ODDITY ${getDetailOddity()}`)
          .replace('beast', getBeastPromptSinglet()),
      ];
    }
    case DiscoveryEnum.EVIDENCE: {
      const subcategory = getEvidenceCategory();
      const feature = dieWeightedRecord(EVIDENCE_SUBCATEGORY[subcategory]);
      const creature = getCreatureSinglet();
      return [category, subcategory, feature.replace('creature', creature)];
    }
    case DiscoveryEnum.STRUCTURE: {
      const subcategory = getStructureCategory();
      const feature = dieWeightedRecord(STRUCTURE_SUBCATEGORY[subcategory]);
      return [
        category,
        subcategory,
        feature
          .replace('settlement', dieWeightedRecord(STRUCTURE_SETTLEMENT))
          .replace('religious', dieWeightedRecord(STRUCTURE_RELIGIOUS))
          .replace('dwelling', dieWeightedRecord(STRUCTURE_DWELLING))
          .replace('infrastructure', dieWeightedRecord(STRUCTURE_INFRASTRUCTURE)),
      ];
    }
  }

  return [category];
};
