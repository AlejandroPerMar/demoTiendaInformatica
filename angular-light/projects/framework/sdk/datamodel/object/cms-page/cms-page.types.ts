import { AbstractEdmMetadataCmsPageCardMetadata, AbstractEdmMetadataCmsPageGalleryMetadata, AbstractEdmMetadataCmsPageKvMetadata } from '@sdk-datamodel-metadata/cms-page';

export interface AbstractEdmObjectCmsPageCardMetadata {
  metadata: AbstractEdmMetadataCmsPageCardMetadata;
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


export interface AbstractEdmObjectCmsPageGalleryMetadata {
  metadata: AbstractEdmMetadataCmsPageGalleryMetadata;
  component_id: string;
  title_active: boolean;
  header_active: boolean;
  text_active: boolean;
  width: number;
  height: number;
  bool_01_active: boolean;
  bool_01_label: string;
  bool_02_active: boolean;
  bool_02_label: string;
  bool_03_active: boolean;
  bool_03_label: string;
}


export interface AbstractEdmObjectCmsPageKVMetadata {
  metadata: AbstractEdmMetadataCmsPageKvMetadata;
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