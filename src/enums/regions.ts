import { dieN } from '@/composables/dice';
import type { ObjectValues } from './enums';

export const RegionClimateEnum = {
  FRIGID: 'frigid',
  TEMPERATE: 'temperate',
  TORRID: 'torrid',
} as const;
export type RegionClimate = ObjectValues<typeof RegionClimateEnum>;

export const RegionSafetyEnum = {
  SAFE: 'safe',
  UNSAFE: 'unsafe',
  DANGEROUS: 'dangerous',
  PERILOUS: 'perilous',
} as const;
export type RegionSafety = ObjectValues<typeof RegionSafetyEnum>;

export const RegionAlignmentEnum = {
  GOOD: 'good',
  LAWFUL: 'lawful',
  NEUTRAL: 'neutral',
  CHAOTIC: 'chaotic',
  EVIL: 'evil',
} as const;
export type RegionAlignment = ObjectValues<typeof RegionAlignmentEnum>;

export const REGION_SIZES: Array<string> = [
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

export const REGION_TERRAIN: Record<RegionClimate, Array<string>> = {
  [RegionClimateEnum.FRIGID]: [
    'volcanic highland ',
    'mountains/glacier ',
    'mountains/glacier',
    'highland/hills',
    'highland/hills',
    'hilly boreal forest/taiga',
    'hilly boreal forest/taiga',
    'tundra/steppe/wasteland',
    'tundra/steppe/wasteland',
    'tundra/steppe/wasteland',
    'boreal forest/taiga',
    'boreal forest/taiga',
  ],
  [RegionClimateEnum.TEMPERATE]: [
    'volcanic highland',
    'mountains/glacier',
    'mountains',
    'highland/hills',
    'highland/hills',
    'hilly forest',
    'woodland/forest',
    'woodland/forest',
    'woodland/forest',
    'wetland/marsh/swamp',
    'lowland/plains/prairie',
    'lowland/plains/prairie',
  ],
  [RegionClimateEnum.TORRID]: [
    'volcanic highland',
    'mountains',
    'mountains',
    'highland/hills/dunes',
    'highland/hills/dunes',
    'hilly jungle/rainforest',
    'jungle/rainforest',
    'jungle/rainforest',
    'wetland/marsh/swamp',
    'lowland/desert/flats',
    'lowland/desert/flats',
    'lowland/desert/flats',
  ],
};
export const REGION_CLIMATE: Array<string> = [
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
];
export const REGION_ALIGNMENT: Array<RegionAlignment> = [
  'good',
  'lawful',
  'neutral',
  'chaotic',
  'evil',
];
export const REGION_SAFETY: Array<RegionSafety> = [
  'safe',
  'unsafe',
  'unsafe',
  'dangerous',
  'dangerous',
  'dangerous',
  'dangerous',
  'dangerous',
  'dangerous',
  'perilous',
];
export const REGION_OTHER_TAGS: Array<string> = [
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
export const REGION_NAME_TEMPLATE: Array<string> = [
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
export const REGION_NAME_TERRAIN: Array<string> = [
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
export const REGION_NAME_ADJECTIVE: Array<string> = [
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
];
export const REGION_NAME_NOUN: Array<string> = [
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
export const REGION_ALIGNMENT_MODIFIER: Record<RegionAlignment, number> = {
  [RegionAlignmentEnum.GOOD]: -3,
  [RegionAlignmentEnum.LAWFUL]: -5,
  [RegionAlignmentEnum.NEUTRAL]: 0,
  [RegionAlignmentEnum.CHAOTIC]: 5,
  [RegionAlignmentEnum.EVIL]: 3,
};
export const REGION_SAFETY_MODIFIER: Record<RegionSafety, number> = {
  [RegionSafetyEnum.SAFE]: 3,
  [RegionSafetyEnum.UNSAFE]: 2,
  [RegionSafetyEnum.DANGEROUS]: 1,
  [RegionSafetyEnum.PERILOUS]: 0,
};

export const getRegionSafety = (alignment: RegionAlignment): [string, number] => {
  const safetyIndex = dieN(REGION_SAFETY.length) + REGION_ALIGNMENT_MODIFIER[alignment];
  let safety: RegionSafety | undefined;

  if (safetyIndex < 1) safety = REGION_SAFETY.at(0);
  else if (safetyIndex >= REGION_SAFETY.length - 1) safety = REGION_SAFETY.at(-1);
  else safety = REGION_SAFETY.at(safetyIndex);
  safety = safety ?? RegionSafetyEnum.UNSAFE;

  return [safety, REGION_SAFETY_MODIFIER[safety]];
};

export const getRegionSize = () => REGION_SIZES.at(dieN(REGION_SIZES.length)) ?? '';
export const getRegionalFeatureCount = (size: string) => {
  if (size === 'small') return dieN(4) + 1;
  if (size === 'sizable') return 2 * (1 + dieN(6));
  if (size === 'expansive') return 4 * (1 + dieN(10));
  if (size === 'vast') return 5 * (1 + dieN(12));

  // if (size === 'large')
  return 3 * (1 + dieN(8));
};

export const getRegionClimate = () => REGION_CLIMATE.at(dieN(REGION_CLIMATE.length)) ?? '';
export const getRegionTerrain = (climate: RegionClimate) =>
  REGION_TERRAIN[climate].at(dieN(REGION_TERRAIN[climate].length)) ?? '';
export const getRegionAlignment = () => REGION_ALIGNMENT.at(dieN(REGION_ALIGNMENT.length)) ?? '';

export const getRegionOtherTags = (count: number) => {
  const tags = [];
  for (let t = 0; t <= count; t++) {
    tags.push(REGION_OTHER_TAGS.at(dieN(REGION_OTHER_TAGS.length)) ?? '');
  }

  return tags;
};

export const getRegionName = () => {
  const template =
    REGION_NAME_TEMPLATE.at(dieN(REGION_NAME_TEMPLATE.length)) ?? REGION_NAME_TEMPLATE[0];
  const name_terrain = REGION_NAME_TERRAIN.at(dieN(REGION_NAME_TERRAIN.length)) ?? '';
  const name_adjective = REGION_NAME_ADJECTIVE.at(dieN(REGION_NAME_ADJECTIVE.length)) ?? '';
  const name_noun = REGION_NAME_NOUN.at(dieN(REGION_NAME_NOUN.length)) ?? '';

  return template
    .replace('[terrain]', name_terrain)
    .replace('[adjective]', name_adjective)
    .replace('[noun]', name_noun);
};
