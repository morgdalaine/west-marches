const TRANSFORM_KEYWORDS: string[] = [
  'ABERRANCE',
  'ABILITY',
  'BEAST',
  'CREATURE',
  'DUNGEON',
  'DWELLING',
  'ELEMENT',
  'FACTION',
  'HAZARD',
  'HUMANOID',
  'INFRASTRUCTURE',
  'OBSTACLE',
  'ODDITY',
  'PERSONAL ITEMS',
  'RELIGIOUS',
  'RESOURCE',
  'RUIN',
  'SETTLEMENT',
  'STASH',
  'TRADE GOOD',
];

export const transformHTML = (raw: string) => {
  if (!raw) return '';

  const join = TRANSFORM_KEYWORDS.join('|');
  const regex = new RegExp(`\\b(${join})\\b`, 'ig');
  return raw.replace(regex, `<span class="small-caps">$1</span>`);
};
