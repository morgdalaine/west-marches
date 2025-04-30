import { arrayAtBounded, dieN } from '@/composables/dice';
import type { ObjectValues } from './enums';
import { getHazard } from './regions/hazards';
import { getObstacle } from './regions/obstacles';
import { getArea } from './regions/areas';
import { generatePlaceName } from './regions/places';
import { getSite } from './regions/sites';
import { generateFactionPresence } from './regions/factionPresence';

export const RegionalFeatureEnum = {
  CREATURE: 'creature',
  HAZARD: 'hazard',
  OBSTACLE: 'obstacle',
  AREA: 'area',
  NAMED_PLACE: 'named place',
  SITE: 'site',
  FACTION_PRESENCE: 'faction presence',
  SETTLEMENT: 'settlement',
};
export type RegionalFeature = ObjectValues<typeof RegionalFeatureEnum>;

export const REGIONAL_FEATURE: RegionalFeature[] = [
  'creature',
  'creature',
  'creature',
  'creature',
  'hazard',
  'obstacle',
  'area',
  'named place',
  'site',
  'site',
  'site',
  'faction presence',
  'settlement',
];

export const getRegionalFeature = (safety: number) => {
  const category = arrayAtBounded(REGIONAL_FEATURE, dieN(12, safety));
  switch (category) {
    case RegionalFeatureEnum.CREATURE: {
      // TODO Creature generation
      return [
        category,
        '',
        'See the creature generation procedure in <span class="font-normal">Beasts & Booty</span>.',
      ];
    }
    case RegionalFeatureEnum.HAZARD: {
      const [subcategory, feature] = getHazard();
      return [category, subcategory, feature];
    }
    case RegionalFeatureEnum.OBSTACLE: {
      const [subcategory, feature] = getObstacle();
      return [category, subcategory, feature];
    }
    case RegionalFeatureEnum.AREA: {
      const [subcategory, feature] = getArea();
      return [category, subcategory, feature];
    }
    case RegionalFeatureEnum.NAMED_PLACE: {
      return [category, '', generatePlaceName()];
    }
    case RegionalFeatureEnum.SITE: {
      const [subcategory, feature] = getSite();
      return [category, subcategory, feature];
    }
    case RegionalFeatureEnum.FACTION_PRESENCE: {
      const [subcategory, feature] = generateFactionPresence();
      return [category, subcategory, feature];
    }
    case RegionalFeatureEnum.SETTLEMENT: {
      // TODO Settlement generation
      return [
        category,
        '',
        'See the settlement generation procedure in <span class="font-normal">Settlements & Citizens</span>.',
      ];
    }
  }

  return ['', '', ''];
};

const TRANSFORM_KEYWORDS: string[] = [
  'CREATURE',
  'FACTION',
  'HAZARD',
  'OBSTACLE',
  'ODDITY',
  'RESOURCE',
  'SETTLEMENT',
];

export const transformHTML = (raw: string) => {
  const join = TRANSFORM_KEYWORDS.join('|');
  const regex = new RegExp(`\\b(${join})\\b`, 'ig');
  return raw.replace(regex, `<span class="small-caps">$1</span>`);
};
