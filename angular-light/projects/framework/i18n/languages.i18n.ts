import { I18n } from '@i18n/i18n';

export type AbstractI18nLanguagesPayload = {
  de: string;
  en: string;
  es: string;
  fr: string;
  it: string;
  pt: string;
  ru: string;
  tl: string;
  th: string;
  zh: string;
};
export type AbstractI18nLanguages = I18n<AbstractI18nLanguagesPayload>;
