import { dieN } from '@/composables/dice';

export const DETAIL_ODDITY: Array<string> = [
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
] as const;

export const getDetailOddity = () => {
  return DETAIL_ODDITY.at(dieN(DETAIL_ODDITY.length)) ?? '';
};

export const DETAIL_ELEMENT: Array<string> = [
  'void',
  'death/darkness',
  'fire/metal/smoke',
  'earth/stone/vegetation',
  'water/ice/mist',
  'air/wind/storm',
  'life/light',
  'stars/cosmos',
] as const;

export const getDetailElement = () => {
  return DETAIL_ELEMENT.at(dieN(DETAIL_ELEMENT.length)) ?? '';
};

export const DETAIL_MAGIC_TYPE: Array<string> = [
  'necromancy',
  'evocation/destruction',
  'conjuration/summoning',
  'illusion/glamour',
  'enchantment/artifice',
  'transformation',
  'warding/binding',
  'elemental',
  'restoration/healing',
  'divination/scrying',
] as const;

export const getDetailMagicType = () => {
  return DETAIL_MAGIC_TYPE.at(dieN(DETAIL_MAGIC_TYPE.length)) ?? '';
};
