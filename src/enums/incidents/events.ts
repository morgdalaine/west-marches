import { type WeightedRecord, dieWeightedRecord } from '@/composables/dice';
import type { ObjectValues } from '../enums';
import { getDetailOddity } from '../details';
import { getBeastPromptSinglet, getMonsterPromptSinglet } from '../creatures';

export const EventCategoryEnum = {
  UNNATURAL_EVENT: 'unnatural event',
  NATURAL_EVENT: 'natural event',
  MUNICIPAL_EVENT: 'municipal event',
  ENTANGLEMENT: 'entanglement',
  OPPORTUNITY: 'opportunity',
} as const;
export type EventCategory = ObjectValues<typeof EventCategoryEnum>;

export const EVENT_CATEGORY: WeightedRecord = {
  [EventCategoryEnum.UNNATURAL_EVENT]: 1,
  [EventCategoryEnum.NATURAL_EVENT]: 2,
  [EventCategoryEnum.MUNICIPAL_EVENT]: 3,
  [EventCategoryEnum.ENTANGLEMENT]: 6,
  [EventCategoryEnum.OPPORTUNITY]: 8,
};

export const EventUnnaturalEnum = {
  DIVINE: 'divine',
  PLANAR: 'planar',
  ARCANE: 'arcane',
} as const;
export type EventUnnatural = ObjectValues<typeof EventUnnaturalEnum>;

export const EventNaturalEnum = {
  ASTRAL: 'astral',
  TECTONIC: 'tectonic',
  SEASONAL_WEATHER: 'seasonal weather',
} as const;
export type EventNatural = ObjectValues<typeof EventNaturalEnum>;

export const MunicipalEventEnum = {
  STRUCTURAL: 'structural',
  RELIGIOUS: 'religious',
  SOCIAL: 'social',
} as const;
export type MunicipalEvent = ObjectValues<typeof MunicipalEventEnum>;

export const EventEntanglementEnum = {
  CRIMINAL: 'criminal',
  STREET_LEVEL: 'street level',
  PERSONAL: 'personal',
  SECURITY: 'security',
  POLITICAL: 'political',
  SUPERNATURAL: 'supernatural',
  COMMERCIAL: 'commercial',
  RELIGIOUS: 'religious',
  MISCELLANEOUS: 'miscellaneous',
} as const;
export type EventEntanglement = ObjectValues<typeof EventEntanglementEnum>;

export const EventOpportunityEnum = {
  ELIMINATE: 'eliminate',
  PROTECT: 'protect',
  VENTURE: 'venture',
  INVESTIGATE: 'investigate',
  FETCH: 'fetch',
  DELIVER: 'deliver',
} as const;
export type EventOpportunity = ObjectValues<typeof EventOpportunityEnum>;

export const EVENT_UNNATURAL: WeightedRecord = {
  [EventUnnaturalEnum.DIVINE]: 1,
  [EventUnnaturalEnum.PLANAR]: 2,
  [EventUnnaturalEnum.ARCANE]: 9,
};
export const EVENT_UNNATURAL_DIVINE: WeightedRecord = {
  'avatar appears': 1,
  'possession': 1,
  'intervention, bane': 1,
  'intervention, boon': 1,
  'omen': 6,
};
export const EVENT_UNNATURAL_PLANAR: WeightedRecord = {
  'invasion force': 1,
  'planar rift': 1,
  'possession': 1,
  'presence': 2,
  'manifestation': 2,
  'vibration': 3,
};
export const EVENT_UNNATURAL_ARCANE: WeightedRecord = {
  'catastrophe': 1,
  'wizard duel': 2,
  'disturbance/mischief': 2,
  'spell gone awry': 5,
};
export const EVENT_UNNATURAL_SUBCATEGORY: Record<string, WeightedRecord> = {
  [EventUnnaturalEnum.DIVINE]: EVENT_UNNATURAL_DIVINE,
  [EventUnnaturalEnum.PLANAR]: EVENT_UNNATURAL_PLANAR,
  [EventUnnaturalEnum.ARCANE]: EVENT_UNNATURAL_ARCANE,
};

export const EVENT_NATURAL: WeightedRecord = {
  [EventNaturalEnum.ASTRAL]: 1,
  [EventNaturalEnum.TECTONIC]: 1,
  [EventNaturalEnum.SEASONAL_WEATHER]: 10,
};
export const EVENT_NATURAL_ASTRAL: WeightedRecord = {
  'meteor strike': 1,
  'meteor shower': 1,
  'eclipse': 1,
  'astrological omen': 3,
  'planetary alignment': 1,
  'constellation ascendant': 3,
};
export const EVENT_NATURAL_TECTONIC: WeightedRecord = {
  'volcanic eruption': 1,
  'volcanic activity': 1,
  'rift in earth appears': 1,
  'earthquake': 1,
  'sinkhole': 2,
  'tremor': 4,
};
export const EVENT_NATURAL_SEASONAL_WEATHER: WeightedRecord = {
  'flooding|wildfire/forest fire|lightning storms|blizzard/avalanche': 1,
  'creature activity|drought|windstorms|heavy snows': 2,
  'rainstorms|heat wave|migration/swarms|extreme cold': 3,
  'thick fog/mist|welcome rain|good harvest|unseasonably warm': 4,
};
export const EVENT_NATURAL_SEASONAL_WEATHER_SPRING: WeightedRecord = {
  'flooding': 1,
  'creature activity': 2,
  'rainstorms': 3,
  'thick fog/mist': 4,
};
export const EVENT_NATURAL_SEASONAL_WEATHER_SUMMER: WeightedRecord = {
  'wildfire/forest fire': 1,
  'drought': 2,
  'heat wave': 3,
  'welcome rain': 4,
};
export const EVENT_NATURAL_SEASONAL_WEATHER_FALL: WeightedRecord = {
  'lightning storms': 1,
  'windstorms': 2,
  'migration/swarms': 3,
  'good harvest': 4,
};
export const EVENT_NATURAL_SEASONAL_WEATHER_WINTER: WeightedRecord = {
  'blizzard/avalanche': 1,
  'heavy snows': 2,
  'extreme cold': 3,
  'unseasonably warm': 4,
};
export const EVENT_NATURAL_SUBCATEGORY: Record<string, WeightedRecord> = {
  [EventNaturalEnum.ASTRAL]: EVENT_NATURAL_ASTRAL,
  [EventNaturalEnum.TECTONIC]: EVENT_NATURAL_TECTONIC,
  [EventNaturalEnum.SEASONAL_WEATHER]: EVENT_NATURAL_SEASONAL_WEATHER,
};

export const EVENT_MUNICIPAL: WeightedRecord = {
  [MunicipalEventEnum.STRUCTURAL]: 2,
  [MunicipalEventEnum.RELIGIOUS]: 5,
  [MunicipalEventEnum.SOCIAL]: 5,
};
export const EVENT_MUNICIPAL_STRUCTURAL: WeightedRecord = {
  'oddity': 1,
  'expansion/clearing': 1,
  'quarry/mine': 1,
  'street/waterway/bridge': 1,
  'housing': 2,
  'marketplace/waterfront': 1,
  'fortification/barracks': 1,
  'shrine/temple': 1,
  'palace/stronghold': 1,
};
export const EVENT_MUNICIPAL_RELIGIOUS: WeightedRecord = {
  'funeral/memorial': 2,
  'tithe collection': 1,
  'ritual offering/sacrifice': 1,
  'seasonal festival': 1,
  'minor holiday/festival': 1,
  'rite of passage': 1,
  'cleansing/blessing': 1,
  'major holiday/festival': 1,
  'revelation/prophecy': 1,
};
export const EVENT_MUNICIPAL_SOCIAL: WeightedRecord = {
  'hanging/execution': 1,
  'tax collection': 1,
  'visiting dignitary': 1,
  'recognition/honor': 1,
  'caravan/fleet arrival': 1,
  'procession/parade': 2,
  'contest/tournament': 1,
  'wedding/feast': 1,
  'promotion/coronation': 1,
};
export const EVENT_MUNICIPAL_SUBCATEGORY: Record<string, WeightedRecord> = {
  [MunicipalEventEnum.STRUCTURAL]: EVENT_MUNICIPAL_STRUCTURAL,
  [MunicipalEventEnum.RELIGIOUS]: EVENT_MUNICIPAL_RELIGIOUS,
  [MunicipalEventEnum.SOCIAL]: EVENT_MUNICIPAL_SOCIAL,
};

export const EVENT_ENTANGLEMENT: WeightedRecord = {
  [EventEntanglementEnum.CRIMINAL]: 2,
  [EventEntanglementEnum.STREET_LEVEL]: 2,
  [EventEntanglementEnum.PERSONAL]: 2,
  [EventEntanglementEnum.SECURITY]: 1,
  [EventEntanglementEnum.POLITICAL]: 1,
  [EventEntanglementEnum.SUPERNATURAL]: 1,
  [EventEntanglementEnum.COMMERCIAL]: 1,
  [EventEntanglementEnum.RELIGIOUS]: 1,
  [EventEntanglementEnum.MISCELLANEOUS]: 1,
};
export const EVENT_ENTANGLEMENT_CRIMINAL: WeightedRecord = {
  'murder/assassination': 1,
  'abduction/pressgang': 1,
  'mugging/robbery': 1,
  'con/swindle/frame-up': 1,
  'sabotage/arson': 1,
  'smuggling/contraband': 1,
  'pickpocket/theft': 2,
  'mischief/deviltry': 1,
  'recruitment': 1,
};
export const EVENT_ENTANGLEMENT_STREET_LEVEL: WeightedRecord = {
  'rampaging creature': 1,
  'plague/blight/disease': 1,
  'mistaken identity': 1,
  'pickpocket/theft': 1,
  'accident/run-in': 1,
  'offense/accusation': 1,
  'waste/sewage/water': 1,
  'urchin/beggar': 2,
  'performance/show': 1,
};
export const EVENT_ENTANGLEMENT_PERSONAL: WeightedRecord = {
  'rival/enemy': 1,
  'betrayal/treachery': 1,
  'illness': 1,
  'debt/demand': 1,
  'memory/recollection': 1,
  'favor/request': 2,
  'attention/scrutiny': 1,
  'attraction/romance': 1,
  'old ally/friend': 1,
};
export const EVENT_ENTANGLEMENT_SECURITY: WeightedRecord = {
  'invasion/occupation': 1,
  'bandit/raider threat': 1,
  'monster threat': 1,
  'traitor/turncoat': 1,
  'crackdown/suppression': 2,
  'demonstration/drill': 2,
  'recruitment': 2,
};
export const EVENT_ENTANGLEMENT_POLITICAL: WeightedRecord = {
  'riot/revolt': 1,
  'diplomatic crisis': 1,
  'power struggle': 1,
  'trade dispute': 1,
  'espionage/intrigue': 2,
  'corruption': 2,
  'demonstration/protest': 2,
};
export const EVENT_ENTANGLEMENT_SUPERNATURAL: WeightedRecord = {
  'invasion/attack': 1,
  'curse/geas': 1,
  'haunt/possession': 2,
  'corruption/distortion': 2,
  'awakening/inception': 2,
  'portal/gateway': 1,
  'discovery/revelation': 1,
};
export const EVENT_ENTANGLEMENT_COMMERCIAL: WeightedRecord = {
  'market collapse': 1,
  'monopoly/guild war': 1,
  'resource depletion': 1,
  'supply/demand issue': 1,
  'trade mission/caravan': 2,
  'bargain/deal': 3,
  'job opening': 1,
};
export const EVENT_ENTANGLEMENT_RELIGIOUS: WeightedRecord = {
  'condemnation/curse': 1,
  'persecution': 1,
  'trial/test': 1,
  'proselytization': 4,
  'pilgrimage': 1,
  'blessing/boon': 1,
  'prophecy/revelation': 1,
};
export const EVENT_ENTANGLEMENT_MISCELLANEOUS: WeightedRecord = {
  'oddity': 1,
  'clue/evidence': 1,
  'lost npc': 1,
  'stray animal/creature': 2,
  'found item': 1,
  'party/feast': 1,
  'friendly/solicitous npc': 2,
};
export const EVENT_ENTANGLEMENT_SUBCATEGORY: Record<string, WeightedRecord> = {
  [EventEntanglementEnum.CRIMINAL]: EVENT_ENTANGLEMENT_CRIMINAL,
  [EventEntanglementEnum.STREET_LEVEL]: EVENT_ENTANGLEMENT_STREET_LEVEL,
  [EventEntanglementEnum.PERSONAL]: EVENT_ENTANGLEMENT_PERSONAL,
  [EventEntanglementEnum.SECURITY]: EVENT_ENTANGLEMENT_SECURITY,
  [EventEntanglementEnum.POLITICAL]: EVENT_ENTANGLEMENT_POLITICAL,
  [EventEntanglementEnum.SUPERNATURAL]: EVENT_ENTANGLEMENT_SUPERNATURAL,
  [EventEntanglementEnum.COMMERCIAL]: EVENT_ENTANGLEMENT_COMMERCIAL,
  [EventEntanglementEnum.RELIGIOUS]: EVENT_ENTANGLEMENT_RELIGIOUS,
  [EventEntanglementEnum.MISCELLANEOUS]: EVENT_ENTANGLEMENT_MISCELLANEOUS,
};

export const EVENT_OPPORTUNITY: WeightedRecord = {
  [EventOpportunityEnum.ELIMINATE]: 1,
  [EventOpportunityEnum.PROTECT]: 1,
  [EventOpportunityEnum.VENTURE]: 1,
  [EventOpportunityEnum.INVESTIGATE]: 1,
  [EventOpportunityEnum.FETCH]: 1,
  [EventOpportunityEnum.DELIVER]: 1,
};
export const EVENT_OPPORTUNITY_ELIMINATE: WeightedRecord = {
  'assassinate authority': 1,
  'murder npc': 2,
  'subdue/slay monster': 3,
  'subdue/slay beast': 2,
  'destroy location': 1,
  'destroy item': 1,
};
export const EVENT_OPPORTUNITY_PROTECT: WeightedRecord = {
  'protect npc': 2,
  'protect location': 1,
  'protect item': 1,
  'patrol trade route': 2,
  'patrol area': 2,
  'defend tenets of faith': 1,
  'defend personal choices': 1,
};
export const EVENT_OPPORTUNITY_VENTURE: WeightedRecord = {
  'invest in business': 1,
  'invest in idea': 1,
  'establish contact': 1,
  'chart/map area': 2,
  'locate discovery': 1,
  'prospect for resource': 2,
  'find booty': 2,
};
export const EVENT_OPPORTUNITY_INVESTIGATE: WeightedRecord = {
  'find killer': 1,
  'find criminal': 1,
  'find missing npc': 1,
  'find missing item': 2,
  'search npc': 1,
  'search location': 1,
  'watch/follow npc': 2,
  'stake out location': 1,
};
export const EVENT_OPPORTUNITY_FETCH: WeightedRecord = {
  'capture criminal': 1,
  'capture/abduct npc': 1,
  'rescue npc': 2,
  'get item from npc': 2,
  'get item from location': 1,
  'obtain item': 2,
  'obtain oath from npc': 1,
};
export const EVENT_OPPORTUNITY_DELIVER: WeightedRecord = {
  'deliver bad news to npc': 3,
  'deliver message to npc': 1,
  'deliver item to npc': 2,
  'escort trade caravan': 1,
  'escort precious cargo': 1,
  'escort npc': 1,
};
export const EVENT_OPPORTUNITY_SUBCATEGORY: Record<string, WeightedRecord> = {
  [EventOpportunityEnum.ELIMINATE]: EVENT_OPPORTUNITY_ELIMINATE,
  [EventOpportunityEnum.PROTECT]: EVENT_OPPORTUNITY_PROTECT,
  [EventOpportunityEnum.VENTURE]: EVENT_OPPORTUNITY_VENTURE,
  [EventOpportunityEnum.INVESTIGATE]: EVENT_OPPORTUNITY_INVESTIGATE,
  [EventOpportunityEnum.FETCH]: EVENT_OPPORTUNITY_FETCH,
  [EventOpportunityEnum.DELIVER]: EVENT_OPPORTUNITY_DELIVER,
};

const getEventPair = (category: string, subcategory: string) => {
  return `${subcategory} <span class="font-uppercase">${category}</span>`;
};

export const getEventCategory = () => dieWeightedRecord(EVENT_CATEGORY);
export const getEvent = () => {
  const category = getEventCategory();
  const [subcategory, prompt] = (() => {
    switch (category) {
      case EventCategoryEnum.UNNATURAL_EVENT: {
        const subcategory = dieWeightedRecord(EVENT_UNNATURAL);
        return [subcategory, dieWeightedRecord(EVENT_UNNATURAL_SUBCATEGORY[subcategory])];
      }
      case EventCategoryEnum.NATURAL_EVENT: {
        const subcategory = dieWeightedRecord(EVENT_NATURAL);
        // TODO if (subcategory === EventNaturalEnum.SEASONAL_WEATHER)
        return [subcategory, dieWeightedRecord(EVENT_NATURAL_SUBCATEGORY[subcategory])];
      }
      case EventCategoryEnum.MUNICIPAL_EVENT: {
        const subcategory = dieWeightedRecord(EVENT_MUNICIPAL);
        const prompt = dieWeightedRecord(EVENT_MUNICIPAL_SUBCATEGORY[subcategory]);
        return [subcategory, prompt.replace('oddity', `ODDITY ${getDetailOddity()}`)];
      }
      case EventCategoryEnum.ENTANGLEMENT: {
        const subcategory = dieWeightedRecord(EVENT_ENTANGLEMENT);
        return [subcategory, dieWeightedRecord(EVENT_ENTANGLEMENT_SUBCATEGORY[subcategory])];
      }
      case EventCategoryEnum.OPPORTUNITY: {
        const subcategory = dieWeightedRecord(EVENT_OPPORTUNITY);
        const prompt = dieWeightedRecord(EVENT_OPPORTUNITY_SUBCATEGORY[subcategory]);
        return [
          subcategory,
          prompt
            .replace('beast', `BEAST ${getBeastPromptSinglet()}`)
            .replace('monster', `MONSTER ${getMonsterPromptSinglet()}`),
        ];
      }
      default:
        return '';
    }
  })();
  // const prompt = (() => {
  //   console.debug(subcategory);
  //   switch (subcategory) {
  //     default:
  //       return 'An event <span class="font-normal">(Settlements & Citizens)</span> is something notable that occurs within the bounds of a community.';
  //   }
  // })();

  return [getEventPair(category, subcategory), prompt];
};
