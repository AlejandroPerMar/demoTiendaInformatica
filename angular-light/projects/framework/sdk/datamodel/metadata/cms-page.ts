import { AbstractEdmMetadataDataset, AbstractEdmMetadataField } from '@sdk-edm/metadata';

export interface AbstractEdmMetadataCmsPageCardMetadata extends AbstractEdmMetadataDataset {
  image_active: AbstractEdmMetadataField;
  image_array: AbstractEdmMetadataField;
  width: AbstractEdmMetadataField;
  height: AbstractEdmMetadataField;
  document_active: AbstractEdmMetadataField;
  document_array: AbstractEdmMetadataField;
  document_label: AbstractEdmMetadataField;
  text_01_active: AbstractEdmMetadataField;
  text_01_label: AbstractEdmMetadataField;
  text_02_active: AbstractEdmMetadataField;
  text_02_label: AbstractEdmMetadataField;
  text_03_active: AbstractEdmMetadataField;
  text_03_label: AbstractEdmMetadataField;
  text_04_active: AbstractEdmMetadataField;
  text_04_label: AbstractEdmMetadataField;
  text_05_active: AbstractEdmMetadataField;
  text_05_label: AbstractEdmMetadataField;
  text_06_active: AbstractEdmMetadataField;
  text_06_label: AbstractEdmMetadataField;
  text_07_active: AbstractEdmMetadataField;
  text_07_label: AbstractEdmMetadataField;
  text_08_active: AbstractEdmMetadataField;
  text_08_label: AbstractEdmMetadataField;
  text_09_active: AbstractEdmMetadataField;
  text_09_label: AbstractEdmMetadataField;
  text_10_active: AbstractEdmMetadataField;
  text_10_label: AbstractEdmMetadataField;
  bool_01_active: AbstractEdmMetadataField;
  bool_01_label: AbstractEdmMetadataField;
  bool_02_active: AbstractEdmMetadataField;
  bool_02_label: AbstractEdmMetadataField;
  bool_03_active: AbstractEdmMetadataField;
  bool_03_label: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataCmsPageCardPayload extends AbstractEdmMetadataDataset {
  images: AbstractEdmMetadataField;
  documents: AbstractEdmMetadataField;
  text_01: AbstractEdmMetadataField;
  text_02: AbstractEdmMetadataField;
  text_03: AbstractEdmMetadataField;
  text_04: AbstractEdmMetadataField;
  text_05: AbstractEdmMetadataField;
  text_06: AbstractEdmMetadataField;
  text_07: AbstractEdmMetadataField;
  text_08: AbstractEdmMetadataField;
  text_09: AbstractEdmMetadataField;
  text_10: AbstractEdmMetadataField;
  bool_01: AbstractEdmMetadataField;
  bool_02: AbstractEdmMetadataField;
  bool_03: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataCmsPageComponent extends AbstractEdmMetadataDataset {
  component_type: AbstractEdmMetadataField;
  component_label: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataCmsPageGalleryMetadata extends AbstractEdmMetadataDataset {
  title_active: AbstractEdmMetadataField;
  header_active: AbstractEdmMetadataField;
  text_active: AbstractEdmMetadataField;
  width: AbstractEdmMetadataField;
  height: AbstractEdmMetadataField;
  bool_01_active: AbstractEdmMetadataField;
  bool_01_label: AbstractEdmMetadataField;
  bool_02_active: AbstractEdmMetadataField;
  bool_02_label: AbstractEdmMetadataField;
  bool_03_active: AbstractEdmMetadataField;
  bool_03_label: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataCmsPageGalleryPayload extends AbstractEdmMetadataDataset {
  image: AbstractEdmMetadataField;
  title: AbstractEdmMetadataField;
  header: AbstractEdmMetadataField;
  text: AbstractEdmMetadataField;
  bool_01: AbstractEdmMetadataField;
  bool_02: AbstractEdmMetadataField;
  bool_03: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataCmsPageKvMetadata extends AbstractEdmMetadataDataset {
  text_01_active: AbstractEdmMetadataField;
  text_01_label: AbstractEdmMetadataField;
  text_02_active: AbstractEdmMetadataField;
  text_02_label: AbstractEdmMetadataField;
  text_03_active: AbstractEdmMetadataField;
  text_03_label: AbstractEdmMetadataField;
  text_04_active: AbstractEdmMetadataField;
  text_04_label: AbstractEdmMetadataField;
  text_05_active: AbstractEdmMetadataField;
  text_05_label: AbstractEdmMetadataField;
  text_06_active: AbstractEdmMetadataField;
  text_06_label: AbstractEdmMetadataField;
  text_07_active: AbstractEdmMetadataField;
  text_07_label: AbstractEdmMetadataField;
  text_08_active: AbstractEdmMetadataField;
  text_08_label: AbstractEdmMetadataField;
  text_09_active: AbstractEdmMetadataField;
  text_09_label: AbstractEdmMetadataField;
  text_10_active: AbstractEdmMetadataField;
  text_10_label: AbstractEdmMetadataField;
  localized_text_01_active: AbstractEdmMetadataField;
  localized_text_01_label: AbstractEdmMetadataField;
  localized_text_02_active: AbstractEdmMetadataField;
  localized_text_02_label: AbstractEdmMetadataField;
  localized_text_03_active: AbstractEdmMetadataField;
  localized_text_03_label: AbstractEdmMetadataField;
  localized_text_04_active: AbstractEdmMetadataField;
  localized_text_04_label: AbstractEdmMetadataField;
  localized_text_05_active: AbstractEdmMetadataField;
  localized_text_05_label: AbstractEdmMetadataField;
  localized_text_06_active: AbstractEdmMetadataField;
  localized_text_06_label: AbstractEdmMetadataField;
  localized_text_07_active: AbstractEdmMetadataField;
  localized_text_07_label: AbstractEdmMetadataField;
  localized_text_08_active: AbstractEdmMetadataField;
  localized_text_08_label: AbstractEdmMetadataField;
  localized_text_09_active: AbstractEdmMetadataField;
  localized_text_09_label: AbstractEdmMetadataField;
  localized_text_10_active: AbstractEdmMetadataField;
  localized_text_10_label: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataCmsPageKvPayload extends AbstractEdmMetadataDataset {
  text_01: AbstractEdmMetadataField;
  text_02: AbstractEdmMetadataField;
  text_03: AbstractEdmMetadataField;
  text_04: AbstractEdmMetadataField;
  text_05: AbstractEdmMetadataField;
  text_06: AbstractEdmMetadataField;
  text_07: AbstractEdmMetadataField;
  text_08: AbstractEdmMetadataField;
  text_09: AbstractEdmMetadataField;
  text_10: AbstractEdmMetadataField;
  localized_text_01: AbstractEdmMetadataField;
  localized_text_02: AbstractEdmMetadataField;
  localized_text_03: AbstractEdmMetadataField;
  localized_text_04: AbstractEdmMetadataField;
  localized_text_05: AbstractEdmMetadataField;
  localized_text_06: AbstractEdmMetadataField;
  localized_text_07: AbstractEdmMetadataField;
  localized_text_08: AbstractEdmMetadataField;
  localized_text_09: AbstractEdmMetadataField;
  localized_text_10: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataCmsPagePage extends AbstractEdmMetadataDataset {
  path_hierarchy_01: AbstractEdmMetadataField;
  path_hierarchy_02: AbstractEdmMetadataField;
  path_hierarchy_03: AbstractEdmMetadataField;
  path_hierarchy_04: AbstractEdmMetadataField;
  path_hierarchy_05: AbstractEdmMetadataField;
  path_hierarchy_06: AbstractEdmMetadataField;
  path_hierarchy_07: AbstractEdmMetadataField;
  path_hierarchy_08: AbstractEdmMetadataField;
  path_hierarchy_09: AbstractEdmMetadataField;
  path_hierarchy_10: AbstractEdmMetadataField;
  title: AbstractEdmMetadataField;
  keywords: AbstractEdmMetadataField;
  description: AbstractEdmMetadataField;
  images: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataCmsPage {
  card_metadata: AbstractEdmMetadataCmsPageCardMetadata;
  card_payload: AbstractEdmMetadataCmsPageCardPayload;
  component: AbstractEdmMetadataCmsPageComponent;
  gallery_metadata: AbstractEdmMetadataCmsPageGalleryMetadata;
  gallery_payload: AbstractEdmMetadataCmsPageGalleryPayload;
  kv_metadata: AbstractEdmMetadataCmsPageKvMetadata;
  kv_payload: AbstractEdmMetadataCmsPageKvPayload;
  page: AbstractEdmMetadataCmsPagePage;
}

