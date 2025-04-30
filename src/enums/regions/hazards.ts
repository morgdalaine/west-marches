import { dieArray, dieN, dieWeightedRecord, type WeightedRecord } from '@/composables/dice';
import { getDetailMagicType, getDetailElement, getDetailOddity } from '../details';

export const HAZARD_UNNATURAL: WeightedRecord = {
  'taint/blight/curse': 4,
  'magical': 2,
  'planar': 1,
  'divine': 1,
};

export const HAZARD_NATURAL: string[] = [
  'oddity-based',
  'tectonic/volcanic',
  'precipitous (chasm, crevasse, abyss, rift)',
  'ensnaring (bog, mire, tarpit, quicksand, etc.)',
  'defensive (trap created by local creature /faction)',
  'meteorological (blizzard, thunderstorm, sandstorm, etc.)',
  'seasonal (fire, flood, avalanche, etc.)',
  'impairing (mist, fog, murk, gloom, miasma, etc.)',
];

export const getHazardNatural = () => {
  const hazard = dieArray(HAZARD_NATURAL);
  if (hazard === 'oddity-based') return `ODDITY ${getDetailOddity()}`;

  return hazard;
};

export const getHazard = () => {
  const index = dieN(10, 1);
  let subcategory = 'Natural Hazard';

  // unnatural
  if (index === 1) {
    subcategory = 'Unnatural Hazard';
    let feature = dieWeightedRecord(HAZARD_UNNATURAL);

    if (feature === 'magical') {
      subcategory = `${feature} Hazard`;
      feature = `${getHazardNatural()} [${getDetailMagicType()}]`;
    } else if (feature === 'planar') {
      subcategory = `${feature} Hazard`;
      feature = `${getHazardNatural()} [${getDetailElement()}]`;
    } else if (feature === 'divine') {
      subcategory = `${feature} Hazard`;
      feature = `${getHazardNatural()} [attach diety]`;
    }

    return [subcategory, feature];
  }

  // natural
  return [subcategory, getHazardNatural()];
};
