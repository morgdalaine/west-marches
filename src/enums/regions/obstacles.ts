import { dieN, dieWeightedRecord, type WeightedRecord } from '@/composables/dice';
import { getDetailMagicType, getDetailElement, getDetailOddity } from '../details';

export const OBSTACLE_UNNATURAL: WeightedRecord = {
  'magical': 6,
  'planar': 1,
  'divine': 1,
};

export const OBSTACLE_NATURAL: WeightedRecord = {
  'oddity-based': 1,
  'defensive (barrier created by local creature/faction)': 1,
  'impenetrable (cliff, escarpment, crag, bluff, etc.)': 2,
  'penetrable (dense forest/jungle, etc.)': 2,
  'traversable (river, ravine, crevasse, chasm, abyss, etc.)': 2,
};

export const getObstacleNatural = () => {
  const obstacle = dieWeightedRecord(OBSTACLE_NATURAL);
  if (obstacle === 'oddity-based') return `${getDetailOddity()} ODDITY`;

  return obstacle;
};

export const getObstacle = () => {
  const index = dieN(10, 1);
  let subcategory = 'Natural';

  // unnatural
  if (index === 1) {
    let feature = dieWeightedRecord(OBSTACLE_UNNATURAL);

    if (feature === 'magical') {
      subcategory = `${feature} Obstacle`;
      feature = `${getObstacleNatural()} [${getDetailMagicType()}]`;
    } else if (feature === 'planar') {
      subcategory = `${feature} Obstacle`;
      feature = `${getObstacleNatural()} [${getDetailElement()}]`;
    } else if (feature === 'divine') {
      subcategory = `${feature} Obstacle`;
      feature = `${getObstacleNatural()} [attach diety]`;
    }

    return [subcategory, feature];
  }

  // natural
  return [subcategory, getObstacleNatural()];
};
