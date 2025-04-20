import { dieN } from '@/composables/dice';

export const FACTION_TYPE: Array<string> = [
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

export const FACTION_GOAL: Array<string> = [
  'hunt/oppose FACTION',
  'hunt/oppose CREATURE',
  'spy/sabotage/infiltrate',
  'hold/expand territory',
  'establish outpost/base',
  'locate/exploit RESOURCE',
  'map territory',
  'establish/maintain trade',
];

export const FACTION_CONDITION: Array<string> = [
  'failing/shrinking',
  'nascent/incipient',
  'stable/sustained',
  'successful/expanding',
  'dominating',
];

export const generateFactionPresence = (subcatIndex: number, featIndex: number) => {
  const types = FACTION_TYPE.length;
  const type =
    subcatIndex < types
      ? FACTION_TYPE.at(subcatIndex)
      : `${FACTION_TYPE.at(dieN(types))} & ${FACTION_TYPE.at(dieN(types))}`;
  const goal = FACTION_GOAL.at(featIndex) ?? '';
  const condition = FACTION_CONDITION.at(dieN(FACTION_CONDITION.length)) ?? '';

  return [`${condition} ${type}`, goal];
};
