import { dieN, dieWeightedRecord, type WeightedRecord } from '@/composables/dice';
import { getDetailMagicType, getDetailElement, getDetailOddity } from '../details';
import { getBoldTitlePair, getSmallCapsPair } from '@/composables/text';

export const HAZARD_UNNATURAL: WeightedRecord = {
  'taint/blight/curse': 5,
  'magical': 4,
  'planar': 2,
  'divine': 1,
};

export const HAZARD_NATURAL: WeightedRecord = {
  'oddity-based': 1,
  'tectonic/volcanic': 1,
  'precipitous (chasm, crevasse, abyss, rift)': 2,
  'ensnaring (bog, mire, tarpit, quicksand, etc.)': 2,
  'defensive (trap created by local creature/faction)': 1,
  'meteorological (blizzard, thunderstorm, sandstorm, etc.)': 3,
  'seasonal (fire, flood, avalanche, etc.)': 1,
  'impairing (mist, fog, murk, gloom, miasma, etc.)': 1,
};

export const getHazardNatural = () => {
  const hazard = dieWeightedRecord(HAZARD_NATURAL);
  if (hazard === 'oddity-based') return `ODDITY ${getDetailOddity()}`;

  return hazard;
};

export const getHazard = () => {
  const index = dieN(10, 1);
  let subcategory = getBoldTitlePair('Natural', 'Hazard');

  // unnatural
  if (index === 1) {
    subcategory = 'Unnatural Hazard';
    let feature = dieWeightedRecord(HAZARD_UNNATURAL);

    if (feature === 'magical') {
      subcategory = getBoldTitlePair(feature, 'Hazard');
      feature = getSmallCapsPair(getHazardNatural(), getDetailMagicType());
    } else if (feature === 'planar') {
      subcategory = getBoldTitlePair(feature, 'Hazard');
      feature = getSmallCapsPair(getHazardNatural(), getDetailElement());
    } else if (feature === 'divine') {
      subcategory = getBoldTitlePair(feature, 'Hazard');
      feature = getSmallCapsPair(getHazardNatural(), 'attach diety');
    }

    return [subcategory, feature];
  }

  // natural
  return [subcategory, getHazardNatural()];
};
