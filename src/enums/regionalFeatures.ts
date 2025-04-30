import { arrayAtBounded, dieN } from '@/composables/dice';
import type { ObjectValues } from './enums';
import { getHazard } from '@/enums/incidents/hazards';
import { getObstacle } from '@/enums/incidents/obstacles';
import { getArea } from '@/enums/regions/areas';
import { generatePlaceName } from '@/enums/regions/places';
import { getSite } from '@/enums/regions/sites';
import { generateFactionPresence } from '@/enums/regions/factionPresence';
import { getCreature } from '@/enums/creatures';

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

export const getRegionalFeature = (safety: number): string[] => {
  const category = arrayAtBounded(REGIONAL_FEATURE, dieN(12, safety));
  switch (category) {
    case RegionalFeatureEnum.CREATURE: {
      const [creature, prompt] = getCreature(safety);
      return [
        category,
        creature,
        prompt ??
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
    // case RegionalFeatureEnum.SETTLEMENT:
    default: {
      // TODO Settlement generation
      return [
        category,
        '',
        'See the settlement generation procedure in <span class="font-normal">Settlements & Citizens</span>.',
      ];
    }
  }
};
