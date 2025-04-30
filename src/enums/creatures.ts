import {
  arrayAtBounded,
  dieArray,
  dieN,
  dieWeightedRecord,
  type WeightedRecord,
} from '@/composables/dice';
import type { ObjectValues } from './enums';
import { getDetailAberrance, getDetailAbility, getDetailElement, getDetailOddity } from './details';

export const CreatureCategoryEnum = {
  MONSTER: 'monster',
  BEAST: 'beast',
  HUMANOID: 'humanoid',
} as const;
export type CreatureCategory = ObjectValues<typeof CreatureCategoryEnum>;

export const MonsterSubcategoryEnum = {
  EXTRAPLANAR: 'extraplanar',
  LEGENDARY: 'legendary',
  UNDEAD: 'undead',
  UNUSUAL: 'unusual',
  BEASTLY: 'beastly',
  WILD_HUMANOID: 'wild humanoid',
} as const;
export type MonsterSubcategory = ObjectValues<typeof MonsterSubcategoryEnum>;

export const BeastSubcategoryEnum = {
  WATER_GOING: 'water-going',
  AIRBORNE: 'airborne',
  EARTHBOUND: 'earthbound',
} as const;
export type BeastSubcategory = ObjectValues<typeof BeastSubcategoryEnum>;

export const CREATURE_CATEGORY: CreatureCategory[] = [
  'monster',
  'monster',
  'monster',
  'monster',

  'beast',
  'beast',
  'beast',
  'beast',
  'beast',
  'beast',

  'humanoid',
];

export const MONSTER_SUBCATEGORY: WeightedRecord = {
  [MonsterSubcategoryEnum.EXTRAPLANAR]: 1,
  [MonsterSubcategoryEnum.LEGENDARY]: 1,
  [MonsterSubcategoryEnum.UNDEAD]: 2,
  [MonsterSubcategoryEnum.UNUSUAL]: 2,
  [MonsterSubcategoryEnum.BEASTLY]: 2,
  [MonsterSubcategoryEnum.WILD_HUMANOID]: 2,
};

export const MONSTER_EXTRAPLANAR: WeightedRecord = {
  'divine/demonic lord': 1,
  'angel/demon': 1,
  'cherub/imp': 1,
  'elemental (ELEMENT)': 5,
};
export const MONSTER_LEGENDARY: WeightedRecord = {
  'huge oddity': 1,
  'dragon/giant beast': 1,
  'dragon/giant': 1,
  'huge + beast': 5,
};
export const MONSTER_UNDEAD: WeightedRecord = {
  'lich/vampire/mummy': 1,
  'wight/wraith': 1,
  'wisp/ghost/specter': 2,
  'skeleton/zombie/ghoul': 4,
};
export const MONSTER_UNUSUAL: WeightedRecord = {
  'slime/ooze/jelly': 3,
  'plant/fungus/parasite': 3,
  'golem/homunculus': 1,
  'fey/fairy': 1,
};
export const MONSTER_BEASTLY: WeightedRecord = {
  'beast + aberrance': 1,
  'beast + element': 1,
  'beast + oddity': 1,
  'beast + ability': 2,
  'beast + beast': 3,
};
export const MONSTER_WILD_HUMANOID: WeightedRecord = {
  'ogre/troll': 1,
  'orc/hobgoblin/gnoll': 2,
  'goblin/kobold': 3,
  'humanoid + oddity': 1,
  'humanoid + beast': 1,
};

export const BEAST_SUBCATEGORY: WeightedRecord = {
  [BeastSubcategoryEnum.WATER_GOING]: 2,
  [BeastSubcategoryEnum.AIRBORNE]: 2,
  [BeastSubcategoryEnum.EARTHBOUND]: 6,
};
export const BEAST_WATERGOING: string[] = [
  'whale/narwhal',
  'squid/octopus',
  'dolphin/shark/alligator',
  'turtle/clam/snail/crab',
  'fish/eel/snake',
  'frog/toad',
  'jelly/anemone',
  'insect/barnacle',
];
export const BEAST_AIRBORNE: string[] = [
  'pteranadon/condor',
  'eagle/owl/hawk/falcon',
  'heron/crane/ostrich',
  'crow/raven/gull',
  'songbird/parrot',
  'chicken/duck/goose',
  'bee/wasp/hornet/locust',
  'butterfly/moth/mosquito',
];
export const BEAST_EARTHBOUND: string[] = [
  'dinosaur/elephant',
  'ox/rhino/bear/ape',
  'deer/horse/camel',
  'panther/wolf/boar',
  'snake/lizard/armadillo',
  'mouse/rat/weasel/cat',
  'ant/centipede/scorpion',
  'slug/worm/tick/beetle',
];

export const HUMANOID_SUBCATEGORY: WeightedRecord = {
  'rare': 1,
  'uncommon': 3,
  'common': 6,
};

export const getMonsterPrompt = (subcategory: string): string => {
  switch (subcategory) {
    case MonsterSubcategoryEnum.EXTRAPLANAR: {
      const monster = dieWeightedRecord(MONSTER_EXTRAPLANAR);
      return monster.replace('ELEMENT', getDetailElement());
    }
    case MonsterSubcategoryEnum.LEGENDARY: {
      let monster = dieWeightedRecord(MONSTER_LEGENDARY);
      if (monster.includes('oddity')) {
        monster = `huge ODDITY ${getDetailOddity()}`;
      }
      return monster.replace('beast', getBeastPromptSinglet());
    }
    case MonsterSubcategoryEnum.UNDEAD:
      return dieWeightedRecord(MONSTER_UNDEAD);
    case MonsterSubcategoryEnum.UNUSUAL:
      return dieWeightedRecord(MONSTER_UNUSUAL);
    case MonsterSubcategoryEnum.BEASTLY: {
      const monster = dieWeightedRecord(MONSTER_BEASTLY);
      return monster
        .replace('beast', getBeastPromptSinglet())
        .replace('beast', getBeastPromptSinglet())
        .replace('aberrance', getDetailAberrance())
        .replace('element', getDetailElement())
        .replace('oddity', getDetailOddity())
        .replace('ability', getDetailAbility());
    }
    case MonsterSubcategoryEnum.WILD_HUMANOID: {
      const monster = dieWeightedRecord(MONSTER_WILD_HUMANOID);
      return monster.replace('beast', getBeastPromptSinglet());
    }
  }

  return '';
};

export const getBeastPrompt = (subcategory: string) => {
  switch (subcategory) {
    case BeastSubcategoryEnum.WATER_GOING: {
      return dieArray(BEAST_WATERGOING);
    }
    case BeastSubcategoryEnum.AIRBORNE: {
      return dieArray(BEAST_AIRBORNE);
    }
    case BeastSubcategoryEnum.EARTHBOUND: {
      return dieArray(BEAST_EARTHBOUND);
    }
  }

  return '';
};

export const getBeastPromptSinglet = () => {
  const subcategory = dieWeightedRecord(BEAST_SUBCATEGORY);
  const prompt = getBeastPrompt(subcategory);
  return dieArray(prompt?.split('/') ?? []);
};

const getCreaturePair = (category: string, subcategory: string) => {
  return `${subcategory} <span class="font-uppercase">${category}</span>`;
};

export const getCreature = (safety = 0): string[] => {
  const category = arrayAtBounded(CREATURE_CATEGORY, dieN(12, safety));

  switch (category) {
    case CreatureCategoryEnum.MONSTER: {
      const subcategory = dieWeightedRecord(MONSTER_SUBCATEGORY);
      return [getCreaturePair(category, subcategory), getMonsterPrompt(subcategory)];
    }
    case CreatureCategoryEnum.BEAST: {
      const subcategory = dieWeightedRecord(BEAST_SUBCATEGORY);
      return [getCreaturePair(category, subcategory), getBeastPrompt(subcategory)];
    }
    // case CreatureCategoryEnum.HUMANOID:
    default: {
      const subcategory = dieWeightedRecord(HUMANOID_SUBCATEGORY);
      return [getCreaturePair(category, subcategory), ''];
    }
  }
};

export const getCreatureSinglet = () => {
  const prompt = getCreature().pop();
  return dieArray(prompt?.split('/') ?? []);
};
