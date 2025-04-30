import { dieArray, dieWeightedRecord, type WeightedRecord } from '@/composables/dice';

export const DETAIL_ABERRANCE: string[] = [
  'multicephalous',
  'profuse sensory organs',
  'anatomical oddity',
  'many limbs/digits',
  'acephalous/decentralized',
  'tentacles/feelers',
  'gibbering/babbling',
  'exudes chaos/blight',
  'shapechanging',
];
export const DETAIL_ABILITY: string[] = [
  'bless/curse',
  'entrap/paralyze',
  'levitate/fly/teleport',
  'telepathy/mind control',
  'mimic/camouflage',
  'seduce/hypnotize',
  'dissolve/disintegrate',
  'based on aspect',
  'based on element',
  'drain life/drain magic',
  'magic type',
];
export const DETAIL_ACTIVITY: string[] = [
  'laying trap/ambush',
  'fighting/at war',
  'prowling/on patrol',
  'hunting/foraging',
  'eating/resting',
  'arguing/infighting',
  'traveling/exploring',
  'trading/negotiating',
  'fleeing/running away',
  'building/excavating',
  'sleeping/unconscious',
  'nursing injury/dying',
];
export const DETAIL_ODDITY: string[] = [
  'bright/garish/harsh',
  'geometric/concentric',
  'web/network',
  'crystalline/glassy',
  'fungal/slimy/moldy',
  'gaseous/misty/illusory',
  'volcanic/explosive',
  'magnetic/repellant',
  'multilevel/tiered',
  'absurd/impossible',
];
export const DETAIL_ELEMENT: WeightedRecord = {
  'void': 1,
  'death/darkness': 1,
  'fire/metal/smoke': 2,
  'earth/stone/vegetation': 2,
  'water/ice/mist': 2,
  'air/wind/storm': 2,
  'life/light': 1,
  'stars/cosmos': 1,
};
export const DETAIL_MAGIC_TYPE: WeightedRecord = {
  'necromancy': 1,
  'evocation/destruction': 2,
  'conjuration/summoning': 1,
  'illusion/glamour': 1,
  'enchantment/artifice': 1,
  'transformation': 1,
  'warding/binding': 1,
  'elemental': 2,
  'restoration/healing': 1,
  'divination/scrying': 1,
};
export const DETAIL_ORIENTATION: WeightedRecord = {
  'down/earthward': 2,
  'north': 1,
  'northeast': 1,
  'east': 1,
  'southeast': 1,
  'south': 1,
  'southwest': 1,
  'west': 1,
  'northwest': 1,
  'up/skyward': 2,
};
export const DETAIL_TERRAIN: WeightedRecord = {
  'sea/ocean': 1,
  'wasteland/desert': 1,
  'lowland/plains': 3,
  'wetland/swamp': 1,
  'woodland/jungle': 2,
  'highland/hills': 2,
  'mountains': 1,
  'terrain + oddity': 1,
};
export const DETAIL_VISIBILITY: WeightedRecord = {
  'buried/hidden/invisible': 2,
  'obscured/overgrown': 4,
  'obvious/in plain sight': 3,
  'visible at near distance': 2,
  'visible at far distance': 1,
};

export const getDetailAberrance = () => {
  return dieArray(DETAIL_ABERRANCE);
};
export const getDetailAbility = () => {
  return dieArray(DETAIL_ABILITY);
};
export const getDetailActivity = () => {
  return dieArray(DETAIL_ACTIVITY);
};
export const getDetailOddity = () => {
  return dieArray(DETAIL_ODDITY);
};
export const getDetailElement = () => {
  return dieWeightedRecord(DETAIL_ELEMENT);
};
export const getDetailOrientation = () => {
  return dieWeightedRecord(DETAIL_ORIENTATION);
};
export const getDetailTerrain = () => {
  return dieWeightedRecord(DETAIL_TERRAIN);
};
export const getDetailVisibility = () => {
  return dieWeightedRecord(DETAIL_VISIBILITY);
};
export const getDetailMagicType = () => {
  const magic = dieWeightedRecord(DETAIL_MAGIC_TYPE);
  if (magic === 'elemental') return getDetailElement();

  return magic;
};
