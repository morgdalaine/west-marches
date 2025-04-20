import { dieN } from '@/composables/dice';
import { getDetailMagicType, getDetailElement, getDetailOddity } from './details';

export const OBSTACLE_UNNATURAL: Array<string> = [
  'magical',
  'magical',
  'magical',
  'magical',
  'magical',
  'magical',
  'planar',
  'divine',
];

export const OBSTACLE_NATURAL: Array<string> = [
  'oddity-based',
  'defensive (barrier created by local creature /faction)',
  'impenetrable (cliff, escarpment, crag, bluff, etc.)',
  'impenetrable (cliff, escarpment, crag, bluff, etc.)',
  'penetrable (dense forest/jungle, etc.)',
  'penetrable (dense forest/jungle, etc.)',
  'traversable (river, ravine, crevasse, chasm, abyss, etc.)',
  'traversable (river, ravine, crevasse, chasm, abyss, etc.)',
];

export const getObstacleNatural = (index = -1) => {
  const die = index >= 0 ? index : dieN(OBSTACLE_NATURAL.length);
  if (die < 1) return `${getDetailOddity()} ODDITY`;

  return OBSTACLE_NATURAL.at(die) ?? '';
};

export const getObstacle = (subcatIndex: number, featIndex: number) => {
  let subcategory = 'Natural';
  // unnatural
  if (subcatIndex < 1) {
    subcategory = 'Unnatural';
    let feature = OBSTACLE_UNNATURAL.at(featIndex);

    if (feature === 'magical') {
      subcategory += ' magical';
      feature = `${getObstacleNatural()} [${getDetailMagicType()}]`;
    } else if (feature === 'planar') {
      subcategory += ' planar';
      feature = `${getObstacleNatural()} [${getDetailElement()}]`;
    } else if (feature === 'divine') {
      subcategory += ' divine';
      feature = `${getObstacleNatural()} [attach diety]`;
    }

    return [subcategory, feature];
  }

  // natural
  return [subcategory, getObstacleNatural(featIndex)];
};
