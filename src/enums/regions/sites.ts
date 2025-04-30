import { dieArray, dieN } from '@/composables/dice';
import { getDetailMagicType, getDetailOddity } from '../details';

export const SITE_LAIR: string[] = [
  'inhabited RUIN',
  'inhabited RUIN',
  'inhabited cave',
  'den/burrow/hideout',
  'den/burrow/hideout',
  'hive/aerie/nest',
  'hovel/hut/encampment',
  'farmstead/homestead',
];
export const SITE_RUIN: string[] = [
  'tomb/crypt/necropolis',
  'tomb/crypt/necropolis',
  'shrine/temple',
  'mine/quarry/excavation',
  'shrine/temple',
  'shrine/temple',
  'ancient OUTPOST',
  'ancient SETTLEMENT',
];
export const SITE_OUTPOST: string[] = [
  'planar/magical',
  'FACTION outpost',
  'tollhouse/checkpoint',
  'meeting/trading post',
  'camp/roadhouse/inn',
  'camp/roadhouse/inn',
  'tower/fort/base',
  'tower/fort/base',
];
export const SITE_LANDMARK: string[] = [
  'oddity-based',
  'plant/tree-based',
  'earth/rock-based',
  'earth/rock-based',
  'water-based',
  'FACTION-based',
  'megalith/obelisk/statue',
  'magical',
];
export const SITE_RESOURCE: string[] = [
  'oddity-based',
  'game/hide/fur',
  'timber/clay/stone',
  'timber/clay/stone',
  'herb/spice/dye',
  'copper/tin/iron',
  'silver/gold/gems',
  'magical',
];

export const getSiteFeature = (features: string[]): string => {
  const site = dieArray(features);

  if (site === 'oddity-based') return `${getDetailOddity()} ODDITY`;
  if (site === 'magical') return `${getDetailMagicType()} RESOURCE`;
  if (site.includes('RUIN')) return `inhabited ${getSiteFeature(SITE_RUIN)}`;
  if (site.includes('OUTPOST')) return `ancient ${getSiteFeature(SITE_OUTPOST)}`;

  return site;
};

export const getSite = () => {
  const index = dieN(10, 1);

  switch (index) {
    case 1:
    case 2: {
      const subcategory = 'dungeon';
      return [subcategory, ''];
    }
    case 3:
    case 4: {
      const subcategory = 'lair/dwelling';
      const feature = getSiteFeature(SITE_LAIR);
      return [subcategory, feature];
    }
    case 5:
    case 6: {
      const subcategory = 'ruin';
      const feature = getSiteFeature(SITE_RUIN);
      return [subcategory, feature];
    }
    case 7: {
      const subcategory = 'outpost';
      const feature = getSiteFeature(SITE_OUTPOST);
      return [subcategory, feature];
    }
    case 8:
    case 9: {
      const subcategory = 'landmark';
      const feature = getSiteFeature(SITE_LANDMARK);
      return [subcategory, feature];
    }
    case 10: {
      const subcategory = 'resource';
      const feature = getSiteFeature(SITE_RESOURCE);
      return [subcategory, feature];
    }
  }

  return ['', ''];
};
