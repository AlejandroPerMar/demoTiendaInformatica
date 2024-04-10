import { I18n } from '@i18n/i18n';

export type AbstractI18nFormatPayload = {
  dateFormat: string;
  prettyDate: (value: Date) => string,
  prettyTime: (value: Date) => string,
  prettyTimestamp: (value: Date) => string,
  formatToAmount: (amount: number, currency?: string) => string,
  timeFormat: () => number,
  currencySymbols: (currency: string) => any,
};
export type AbstractI18nFormat = I18n<AbstractI18nFormatPayload>;