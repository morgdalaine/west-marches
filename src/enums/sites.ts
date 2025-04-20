import { dieN } from '@/composables/dice';
import { getDetailMagicType, getDetailOddity } from './details';

export const SITE_LAIR: Array<string> = [
  'inhabited RUIN',
  'inhabited RUIN',
  'inhabited cave',
  'den/burrow/hideout',
  'den/burrow/hideout',
  'hive/aerie/nest',
  'hovel/hut/encampment',
  'farmstead/homestead',
];
export const SITE_RUIN: Array<string> = [
  'tomb/crypt/necropolis',
  'tomb/crypt/necropolis',
  'shrine/temple',
  'mine/quarry/excavation',
  'shrine/temple',
  'shrine/temple',
  'ancient OUTPOST',
  'ancient SETTLEMENT',
];
export const SITE_OUTPOST: Array<string> = [
  'planar/magical',
  'FACTION outpost',
  'tollhouse/checkpoint',
  'meeting/trading post',
  'camp/roadhouse/inn',
  'camp/roadhouse/inn',
  'tower/fort/base',
  'tower/fort/base',
];
export const SITE_LANDMARK: Array<string> = [
  'oddity-based',
  'plant/tree-based',
  'earth/rock-based',
  'earth/rock-based',
  'water-based',
  'FACTION-based',
  'megalith/obelisk/statue',
  'magical',
];
export const SITE_RESOURCE: Array<string> = [
  'oddity-based',
  'game/hide/fur',
  'timber/clay/stone',
  'timber/clay/stone',
  'herb/spice/dye',
  'copper/tin/iron',
  'silver/gold/gems',
  'magical',
];

export const getSiteFeature = (features: Array<string>, index = -1): string => {
  const die = index >= 0 ? index : dieN(features.length);
  const site = features.at(die) ?? '';

  if (site === 'oddity-based') return `${getDetailOddity()} ODDITY`;
  if (site === 'magical') return `${getDetailMagicType()}`;
  if (site.includes('RUIN')) return `uninhabited ${getSiteFeature(SITE_RUIN)}`;
  if (site.includes('OUTPOST')) return `ancient ${getSiteFeature(SITE_OUTPOST)}`;
  if (site.includes('FACTION')) return '// TODO // SITE FACTION BASED';

  return site;
};

export const getSite = (subcatIndex: number, featIndex: number) => {
  let subcategory = '';
  let feature = '';

  switch (subcatIndex + 1) {
    case 1:
    case 2: {
      subcategory = 'dungeon';
      break;
    }
    case 3:
    case 4: {
      subcategory = 'lair/dwelling';
      feature = getSiteFeature(SITE_LAIR, featIndex);
      break;
    }
    case 5:
    case 6: {
      subcategory = 'ruin';
      feature = getSiteFeature(SITE_RUIN, featIndex);
      break;
    }
    case 7: {
      subcategory = 'outpost';
      feature = getSiteFeature(SITE_OUTPOST, featIndex);
      break;
    }
    case 8:
    case 9: {
      subcategory = 'landmark';
      feature = getSiteFeature(SITE_LANDMARK, featIndex);
      break;
    }
    case 10: {
      subcategory = 'resource';
      feature = getSiteFeature(SITE_RESOURCE, featIndex);
      break;
    }
  }

  return [subcategory, feature];
};
