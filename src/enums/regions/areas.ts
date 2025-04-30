import { dieN, dieWeightedRecord, type WeightedRecord } from '@/composables/dice';
import { getDetailMagicType, getDetailElement, getDetailOddity } from '../details';
import { getHazardNatural } from './hazards';
import { getObstacleNatural } from './obstacles';

export const AREA_UNNATURAL: WeightedRecord = {
  'magical': 6,
  'planar': 1,
  'divine': 1,
};

export const AREA_NATURAL: WeightedRecord = {
  'oddity-based': 1,
  'hazard-based': 1,
  'obstacle-based': 2,
  'hunting/gathering ground of local CREATURE': 1,
  'claimed as territory by local FACTION': 1,
  'difficult terrain (icefield, rocky land, dense forest, etc.)': 2,
};

export const getAreaNatural = () => {
  const area = dieWeightedRecord(AREA_NATURAL);

  if (area === 'oddity-based') return `ODDITY ${getDetailOddity()}`;
  if (area === 'hazard-based') return `HAZARD ${getHazardNatural()}—expand reach`;
  if (area === 'obstacle-based') return `OBSTACLE ${getObstacleNatural()}—expand footprint`;

  return area; //.replace(/(creature|faction)/i, '<span class="small-caps">$1</span>');
};

export const getArea = () => {
  const index = dieN(10, 1);
  let subcategory = 'Natural Area';

  // unnatural
  if (index === 1) {
    let feature = dieWeightedRecord(AREA_UNNATURAL);

    if (feature === 'magical') {
      subcategory = `${feature} Area`;
      feature = `${getAreaNatural()} [${getDetailMagicType()}]`;
    } else if (feature === 'planar') {
      subcategory = `${feature} Area`;
      feature = `${getAreaNatural()} [${getDetailElement()}]`;
    } else if (feature === 'divine') {
      subcategory = `${feature} Area`;
      feature = `${getAreaNatural()} [attach diety]`;
    }

    return [subcategory, feature];
  }

  // natural
  return [subcategory, getAreaNatural()];
};
