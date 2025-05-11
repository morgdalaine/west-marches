import { dieArray } from '@/composables/dice';
import type { ObjectValues } from '../enums';
import { getCreature } from '../creatures';
import { getDiscovery } from '../discoveries';
import { getHazard } from './hazards';
import { getMishap } from './mishaps';
import { getObstacle } from './obstacles';
import { getTraveler } from './travelers';
import { getEvent } from './events';

export const IncidentCategoryEnum = {
  SETTLEMENT: 'settlement',
  ROAD: 'road',
  WILDERNESS: 'wilderness',
  DUNGEON: 'dungeon',
} as const;
export type IncidentCategory = ObjectValues<typeof IncidentCategoryEnum>;

export const IncidentEnum = {
  CREATURE: 'creature',
  DISCOVERY: 'discovery',
  EVENT: 'event',
  HAZARD: 'hazard',
  MISHAP: 'mishap',
  OBSTACLE: 'obstacle',
  TRAVELER: 'traveler',
} as const;
export type Incident = ObjectValues<typeof IncidentEnum>;

export const INCIDENT_SETTLEMENT: string[] = [
  'hazard',
  'obstacle',
  'event',
  'event',
  'mishap',
  'discovery',
];
export const INCIDENT_ROAD: string[] = [
  'hazard',
  'creature',
  'mishap',
  'traveler',
  'traveler',
  'traveler',
];
export const INCIDENT_WILDERNESS: string[] = [
  'hazard',
  'obstacle',
  'creature',
  'creature',
  'mishap',
  'discovery',
];
export const INCIDENT_DUNGEON: string[] = [
  'hazard',
  'obstacle',
  'creature',
  'creature',
  'creature',
  'mishap',
];

export const getIncident = (category: IncidentCategory, forceEvent = ''): string[] => {
  const event =
    forceEvent ||
    (() => {
      switch (category) {
        case IncidentCategoryEnum.SETTLEMENT:
          return dieArray(INCIDENT_SETTLEMENT);
        case IncidentCategoryEnum.ROAD:
          return dieArray(INCIDENT_ROAD);
        case IncidentCategoryEnum.WILDERNESS:
          return dieArray(INCIDENT_WILDERNESS);
        case IncidentCategoryEnum.DUNGEON:
          return dieArray(INCIDENT_DUNGEON);
      }
    })();

  switch (event) {
    case IncidentEnum.CREATURE: {
      return [IncidentEnum.CREATURE, ...getCreature()];
    }
    case IncidentEnum.DISCOVERY: {
      return [IncidentEnum.DISCOVERY, ...getDiscovery()];
    }
    case IncidentEnum.EVENT: {
      return [IncidentEnum.EVENT, ...getEvent()];
    }
    case IncidentEnum.HAZARD: {
      return [IncidentEnum.HAZARD, ...getHazard()];
    }
    case IncidentEnum.MISHAP: {
      return [IncidentEnum.MISHAP, '', getMishap()];
    }
    case IncidentEnum.OBSTACLE: {
      return [IncidentEnum.OBSTACLE, ...getObstacle()];
    }
    case IncidentEnum.TRAVELER: {
      return [IncidentEnum.TRAVELER, ...getTraveler()];
    }
  }

  return [];
};
