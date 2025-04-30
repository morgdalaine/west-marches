import { dieArray } from '@/composables/dice';

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

export const getDetailOddity = () => {
  return dieArray(DETAIL_ODDITY);
};

export const DETAIL_ELEMENT: string[] = [
  'void',
  'death/darkness',
  'fire/metal/smoke',
  'earth/stone/vegetation',
  'water/ice/mist',
  'air/wind/storm',
  'life/light',
  'stars/cosmos',
];

export const getDetailElement = () => {
  return dieArray(DETAIL_ELEMENT);
};

export const DETAIL_MAGIC_TYPE: string[] = [
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
];

export const getDetailMagicType = () => {
  return dieArray(DETAIL_MAGIC_TYPE);
};
