import { type WeightedRecord, dieWeightedRecord } from '@/composables/dice';
import type { ObjectValues } from '../enums';

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

export const getEventCategory = () => dieWeightedRecord(EVENT_CATEGORY);
export const getEvent = () => {
  const category = getEventCategory();
  const prompt =
    'An event <span class="font-normal">(Settlements & Citizens)</span> is something notable that occurs within the bounds of a community.';
  return [category, prompt];
};
