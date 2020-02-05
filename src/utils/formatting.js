// @flow

const titleMap = {
  bitbox: 'BITBOX',
  rest: 'REST',
  gui: 'GUI',
  slp: 'SLP',
  badger: 'Badger',
  other: 'Other',
  cashscript: 'CashScript',
  'wallet-api': 'Wallet API',
};
export const getTitleDisplay = (product: string) =>
  titleMap[product] || titleMap.other;
