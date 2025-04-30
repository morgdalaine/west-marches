import { dieN } from '@/composables/dice';
import { getDetailMagicType, getDetailElement, getDetailOddity } from './details';

export const HAZARD_UNNATURAL: string[] = [
  'taint/blight/curse',
  'taint/blight/curse',
  'taint/blight/curse',
  'taint/blight/curse',
  'magical',
  'magical',
  'planar',
  'divine',
];

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

export const getHazardNatural = (index = -1) => {
  const die = index >= 0 ? index : dieN(HAZARD_NATURAL.length);
  if (die < 1) return `${getDetailOddity()} ODDITY`;

  return HAZARD_NATURAL.at(die) ?? '';
};

export const getHazard = (subcatIndex: number, featIndex: number) => {
  let subcategory = 'Natural';
  // unnatural
  if (subcatIndex < 1) {
    subcategory = 'Unnatural';
    let feature = HAZARD_UNNATURAL.at(featIndex);

    if (feature === 'magical') {
      subcategory += ' magical';
      feature = `${getHazardNatural()} [${getDetailMagicType()}]`;
    } else if (feature === 'planar') {
      subcategory += ' planar';
      feature = `${getHazardNatural()} [${getDetailElement()}]`;
    } else if (feature === 'divine') {
      subcategory += ' divine';
      feature = `${getHazardNatural()} [attach diety]`;
    }

    return [subcategory, feature];
  }

  // natural
  return [subcategory, getHazardNatural(featIndex)];
};
