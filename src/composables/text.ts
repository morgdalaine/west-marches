const TRANSFORM_KEYWORDS: string[] = [
  'ABERRANCE',
  'ABILITY',
  'AUTHORITY',
  'BEAST',
  'CREATURE',
  'CRIMINAL',
  'DISCOVERY',
  'DUNGEON',
  'DWELLING',
  'ELEMENT',
  'EVENT',
  'FACTION',
  'HAZARD',
  'HUMANOID',
  'INFRASTRUCTURE',
  'ITEM',
  'LOCATION',
  'MISHAP',
  'MONSTER',
  'NPC',
  'OBSTACLE',
  'ODDITY',
  'PERSONAL ITEMS',
  'RELIGIOUS',
  'RESOURCE',
  'ROAD',
  'RUIN',
  'SETTLEMENT',
  'STASH',
  'TRADE GOOD',
  'TRAVELER',
  'WILDERNESS',
];

export const transformHTML = (raw: string) => {
  if (!raw) return '';

  const join = TRANSFORM_KEYWORDS.join('|');
  const regex = new RegExp(`\\b(${join})\\b`, 'ig');
  return raw.replace(regex, `<span class="small-caps">$1</span>`);
};

export const getSmallCapsPair = (text: string, small: string) => {
  return `${text} <span class="small-caps">${small}</span>`;
};

export const getBoldTitlePair = (bold: string, text: string) => {
  return `${bold} <span class="font-uppercase">${text}</span>`;
};
