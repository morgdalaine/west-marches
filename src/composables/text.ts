const TRANSFORM_KEYWORDS: string[] = [
  'ABERRANCE',
  'ABILITY',
  'BEAST',
  'CREATURE',
  'DISCOVERY',
  'DUNGEON',
  'DWELLING',
  'ELEMENT',
  'EVENT',
  'FACTION',
  'HAZARD',
  'HUMANOID',
  'INFRASTRUCTURE',
  'MISHAP',
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
