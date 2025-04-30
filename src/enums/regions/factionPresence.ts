import { dieArray, dieN, dieWeightedRecord, type WeightedRecord } from '@/composables/dice';
import { getSiteFeature, SITE_RESOURCE } from './sites';

export const FACTION_TYPE: string[] = [
  'rebel/subversive',
  'criminal/corrupt',
  'immigrant/outsider',
  'industrial/labor',
  'relgious/theological',
  'mercantile/trade/guild',
  'martial/mercenary',
  'nationalist/loyalist',
  'academic/arcane',
];

export const FACTION_GOAL: string[] = [
  'hunt/oppose FACTION',
  'hunt/oppose CREATURE',
  'spy/sabotage/infiltrate',
  'hold/expand territory',
  'establish outpost/base',
  'locate/exploit RESOURCE',
  'map territory',
  'establish/maintain trade',
];

export const FACTION_CONDITION: WeightedRecord = {
  'failing/shrinking': 1,
  'nascent/incipient': 1,
  'stable/sustained': 2,
  'successful/expanding': 1,
  'dominating': 1,
};

export const generateFactionPresence = () => {
  const index = dieN(10);
  const type =
    index < FACTION_TYPE.length
      ? dieArray(FACTION_TYPE)
      : `${dieArray(FACTION_TYPE)} & ${dieArray(FACTION_TYPE)}`;
  const goal = dieArray(FACTION_GOAL).replace(
    /RESOURCE/g,
    `<span class="small-caps">${getSiteFeature(SITE_RESOURCE)}</span>`,
  );
  const condition = dieWeightedRecord(FACTION_CONDITION);

  return [`${condition} ${type}`, goal];
};
