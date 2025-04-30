import {
  arrayAtBounded,
  dieArray,
  dieN,
  weightedRecordToArray,
  type WeightedRecord,
} from '@/composables/dice';
import type { ObjectValues } from '../enums';

export const TravelerCategoryEnum = {
  CRIMINAL: 'criminal',
  OUTSIDER: 'outsider',
  FRINGE: 'fringe',
  COMMONER: 'commoner',
  MERCANTILE: 'mercantile',
  RELIGIOUS: 'religious',
  SECURITY: 'security',
  AUTHORITY: 'authority',
} as const;
export type TravelerCategory = ObjectValues<typeof TravelerCategoryEnum>;

export const TRAVELER_CATEGORY: WeightedRecord = {
  [TravelerCategoryEnum.CRIMINAL]: 4,
  [TravelerCategoryEnum.OUTSIDER]: 1,
  [TravelerCategoryEnum.FRINGE]: 1,
  [TravelerCategoryEnum.COMMONER]: 2,
  [TravelerCategoryEnum.MERCANTILE]: 2,
  [TravelerCategoryEnum.RELIGIOUS]: 1,
  [TravelerCategoryEnum.SECURITY]: 1,
  [TravelerCategoryEnum.AUTHORITY]: 1,
};

export const TRAVELER_CRIMINAL: string[] = [
  '3d6+5 raiders/looters/marauders',
  '3d6+5 bandits/brigands/robbers',
  '1d6+1 raiders/looters/marauders',
  '1d6+1 bandits/brigands/robbers',
  '1d6+1 thieves/pickpockets',
  '1d6+1 poachers/rustlers',
  '1 bandit/brigand/robber',
  '1 grifter/chiseler/swindler',
  '1 poacher/rustler',
  '1 thief/pickpocket 10+',
];
export const TRAVELER_OUTSIDER: string[] = [
  '1d6+1 extraplanar [xx] visitors',
  '3d6+5 refugees/immigrants/emigrants',
  '1d6+1 refugees/immigrants/emigrants',
  '1d6+1 fugitives/outlaws/exiles',
  '1 fugitive/outlaw/exile',
  '1d6+1 herders/hunters/trappers',
  '1 diplomat/envoy, 1d6+1 entourage',
  '1 diplomat/envoy',
  'herder/hunter/trapper',
];
export const TRAVELER_FRINGE: string[] = [
  '1d6+1 adventurers, 1d6-1 followers',
  '1 adventurer',
  '1d6+1 beggars/vagrants/wanderers',
  '3d6+5 beggars/vagrants/wanderers',
  '1d6+1 performers, 1d6-1 entourage',
  '1 scholar/sage/wizard, 1d6-1 entourage',
  '1 musician/troubador, 1d6-1 entourage',
  '1 beggar/vagrant/wanderer 10+ 1d6+1 farmers/fishers/gatherers',
];
export const TRAVELER_COMMONER: string[] = [
  '1d6+1 herders/hunters/trappers',
  '3d6+5 laborers/woodcutters/miners',
  '1d6+1 laborers/woodcutters/miners',
  '1d6+1 farmers/fishers/gatherers',
  '1 herder/hunter/trapper',
  '1 laborer/woodcutter/miner',
  '1 farmer/fisher/ gatherer',
];
export const TRAVELER_MERCANTILE: string[] = [
  '1 surveyor/prospector, 1d6-1 entourage',
  '1 explorer, 1d6-1 entourage',
  'supply train, 3d6+5 drivers/porters/guards',
  'supply train, 1d6+1 drivers/porters/guards',
  '1d6+1 merchants/traders, 3d6+5 entourage',
  '1 merchant/trader, 1d6+1 entourage',
  '1 tinker/pedlar/hawker',
];
export const TRAVELER_RELIGIOUS: string[] = [
  '1 hermit/ascetic/anchorite',
  '1 healer/apothecary/mendicant',
  '1 acolyte/novice/postulant',
  '1d6+1 acolytes/novices/postulants',
  '3d6+5 pilgrims/believers/seekers',
  '1 priest/prophet, 3d6-3 followers',
  '1d6+1 pilgrims/believers/seekers',
];
export const TRAVELER_SECURITY: string[] = [
  '1 warden/ranger',
  '1 scout/spy/agent',
  '3d6+5 soldiers/militia/guards',
  '1d6+1 soldiers/militia/guards',
  '1 officer, 6d6+24 soldiers/militia/guards',
  '1 constable/reeve, 1d6+1 guards',
  '1d6+1 soldiers/militia/guards',
];
export const TRAVELER_AUTHORITY: string[] = [
  '1 warden/ranger',
  '1d6+1 wardens/rangers',
  '1 tax collector',
  '1 diplomat/envoy, 1d6-1 entourage',
  '1 magistrate/minister, 1d6+1 entourage',
  '1 noble/chief, 3d6+5 guards/entourage',
  '1 messenger/courier/crier',
];

export const TRAVELER_PROMPT: Record<TravelerCategory, string[]> = {
  [TravelerCategoryEnum.CRIMINAL]: TRAVELER_CRIMINAL,
  [TravelerCategoryEnum.OUTSIDER]: TRAVELER_OUTSIDER,
  [TravelerCategoryEnum.FRINGE]: TRAVELER_FRINGE,
  [TravelerCategoryEnum.COMMONER]: TRAVELER_COMMONER,
  [TravelerCategoryEnum.MERCANTILE]: TRAVELER_MERCANTILE,
  [TravelerCategoryEnum.RELIGIOUS]: TRAVELER_RELIGIOUS,
  [TravelerCategoryEnum.SECURITY]: TRAVELER_SECURITY,
  [TravelerCategoryEnum.AUTHORITY]: TRAVELER_AUTHORITY,
};

export const getTravelerCategory = (safety = 0) => {
  const array = weightedRecordToArray(TRAVELER_CATEGORY);
  const index = dieN(12, safety);
  return arrayAtBounded(array, index);
};

export const getTraveler = (safety = 0) => {
  const category = getTravelerCategory(safety);
  const prompt = dieArray(TRAVELER_PROMPT[category as TravelerCategory]);
  return [category, prompt];
};
