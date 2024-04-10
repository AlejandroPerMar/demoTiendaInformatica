import { I18n } from '@i18n/i18n';

export type AbstractEdmMetadataFieldI18nPayload = {
  placeholder: string;
  label: string;
};
export type AbstractEdmMetadataFieldI18n = I18n<AbstractEdmMetadataFieldI18nPayload>;

export type AbstractEdmMetadataField = {
  mandatory: boolean;
  texts: AbstractEdmMetadataFieldI18n;
}


export interface AbstractEdmMetadataDatasetI18n extends I18n<{ name: string; description: string; }> {
}

export interface AbstractEdmMetadataDataset {
  texts: AbstractEdmMetadataDatasetI18n;
}
