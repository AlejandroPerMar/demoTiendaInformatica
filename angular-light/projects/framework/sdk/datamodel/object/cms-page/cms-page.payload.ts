import { I18nItem, I18nLanguage } from '@i18n/i18n';
import { EdmPayload } from '@sdk-datamodel-object/payload';
import { CloudDocument } from '@sdk-edm/field-document';

export type EdmPayloadCmsPageCardMetadata = {
  component_id: string;
  image_active: boolean;
  image_array: boolean;
  width: number;
  height: number;
  document_active: boolean;
  document_array: boolean;
  document_label: string;
  text_01_active: boolean;
  text_01_label: string;
  text_02_active: boolean;
  text_02_label: string;
  text_03_active: boolean;
  text_03_label: string;
  text_04_active: boolean;
  text_04_label: string;
  text_05_active: boolean;
  text_05_label: string;
  text_06_active: boolean;
  text_06_label: string;
  text_07_active: boolean;
  text_07_label: string;
  text_08_active: boolean;
  text_08_label: string;
  text_09_active: boolean;
  text_09_label: string;
  text_10_active: boolean;
  text_10_label: string;
  bool_01_active: boolean;
  bool_01_label: string;
  bool_02_active: boolean;
  bool_02_label: string;
  bool_03_active: boolean;
  bool_03_label: string;
}


export type EdmPayloadCmsPageCardPayload = {
  component_id: string;
  image?: I18nItem<string>;
  images?: I18nItem<string[]>;
  document?: I18nItem<CloudDocument>;
  documents?: I18nItem<CloudDocument[]>;
  text_01?: I18nItem<string>;
  text_02?: I18nItem<string>;
  text_03?: I18nItem<string>;
  text_04?: I18nItem<string>;
  text_05?: I18nItem<string>;
  text_06?: I18nItem<string>;
  text_07?: I18nItem<string>;
  text_08?: I18nItem<string>;
  text_09?: I18nItem<string>;
  text_10?: I18nItem<string>;
  bool_01?: boolean;
  bool_02?: boolean;
  bool_03?: boolean;
}


export type EdmPayloadCmsPageComponent = {
  component_id: string;
  component_type: string;
  component_label: string;
}


export type EdmPayloadCmsPageGalleryMetadata = {
  component_id: string;
  title_active: boolean;
  header_active: boolean;
  text_active: boolean;
  image_array: boolean;
  width: number;
  height: number;
  bool_01_active: boolean;
  bool_01_label: string;
  bool_02_active: boolean;
  bool_02_label: string;
  bool_03_active: boolean;
  bool_03_label: string;
}


export type EdmPayloadCmsPageGalleryPayload = {
  component_id: string;
  image?: I18nItem<string>;
  title?: I18nItem<string>;
  header?: I18nItem<string>;
  text?: I18nItem<string>;
  bool_01?: boolean;
  bool_02?: boolean;
  bool_03?: boolean;
}


export type EdmPayloadCmsPageKVMetadata = {
  component_id: string;
  text_01_active: boolean;
  text_01_label: string;
  text_02_active: boolean;
  text_02_label: string;
  text_03_active: boolean;
  text_03_label: string;
  text_04_active: boolean;
  text_04_label: string;
  text_05_active: boolean;
  text_05_label: string;
  text_06_active: boolean;
  text_06_label: string;
  text_07_active: boolean;
  text_07_label: string;
  text_08_active: boolean;
  text_08_label: string;
  text_09_active: boolean;
  text_09_label: string;
  text_10_active: boolean;
  text_10_label: string;
  localized_text_01_active: boolean;
  localized_text_01_label: string;
  localized_text_02_active: boolean;
  localized_text_02_label: string;
  localized_text_03_active: boolean;
  localized_text_03_label: string;
  localized_text_04_active: boolean;
  localized_text_04_label: string;
  localized_text_05_active: boolean;
  localized_text_05_label: string;
  localized_text_06_active: boolean;
  localized_text_06_label: string;
  localized_text_07_active: boolean;
  localized_text_07_label: string;
  localized_text_08_active: boolean;
  localized_text_08_label: string;
  localized_text_09_active: boolean;
  localized_text_09_label: string;
  localized_text_10_active: boolean;
  localized_text_10_label: string;
}


export type EdmPayloadCmsPageKVPayload = {
  component_id: string;
  text_01?: string;
  text_02?: string;
  text_03?: string;
  text_04?: string;
  text_05?: string;
  text_06?: string;
  text_07?: string;
  text_08?: string;
  text_09?: string;
  text_10?: string;
  localized_text_01?: I18nItem<string>;
  localized_text_02?: I18nItem<string>;
  localized_text_03?: I18nItem<string>;
  localized_text_04?: I18nItem<string>;
  localized_text_05?: I18nItem<string>;
  localized_text_06?: I18nItem<string>;
  localized_text_07?: I18nItem<string>;
  localized_text_08?: I18nItem<string>;
  localized_text_09?: I18nItem<string>;
  localized_text_10?: I18nItem<string>;
}


export type EdmPayloadCmsPagePage = {
  google_ld_json: string;
  title: I18nItem<string>;
  keywords: I18nItem<string[]>;
  description: I18nItem<string>;
  images: I18nItem<string[]>;
}


export type EdmPayloadCmsPage = EdmPayload & {
  card_metadata: EdmPayloadCmsPageCardMetadata[],
  card_payload: EdmPayloadCmsPageCardPayload[],
  component: EdmPayloadCmsPageComponent[],
  gallery_metadata: EdmPayloadCmsPageGalleryMetadata[],
  gallery_payload: EdmPayloadCmsPageGalleryPayload[],
  kv_metadata: EdmPayloadCmsPageKVMetadata[],
  kv_payload: EdmPayloadCmsPageKVPayload[],
  page: EdmPayloadCmsPagePage,
  language: I18nLanguage,
  languages: I18nLanguage[],
  sitename: string;
}