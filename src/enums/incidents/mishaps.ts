import { dieWeightedRecord, type WeightedRecord } from '@/composables/dice';

export const MISHAP_TYPE: WeightedRecord = {
  'injurious (broken hand/foot/limb, conscussion, etc.)': 2,
  'debilitating (exposure, frostbite, heatstroke, etc.)': 2,
  'impeding (twisted ankle, sprain, dizziness, etc.)': 2,
  'exhausting (physical strain causes 1d4/1d6/1d8 ability damage)': 3,
  'gear-depleting(gear lost/damaged, etc.)': 3,
  'supply-depleting (loss of food/water to spoilage, vermin, carelessness, etc.)': 3,
  'interpersonal (tension, misunderstanding, argument, etc.)': 3,
  'bothersome (distracting/annoying insects, pests, people, etc.)': 2,
};

export const getMishap = () => {
  return dieWeightedRecord(MISHAP_TYPE);
};
