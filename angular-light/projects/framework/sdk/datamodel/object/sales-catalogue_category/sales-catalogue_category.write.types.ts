import { AbstractEdmMetadataSalesCatalogueCategory, AbstractEdmMetadataSalesCatalogueCategoryBasicData } from '@sdk-datamodel-metadata/sales-catalogue-category';
import { AbstractEdmCoreDatasetWrite, AbstractEdmCoreObjectWrite } from '@sdk-edm/core';
import { AbstractEdmFieldWriteI18n } from '@sdk-edm/field-i18n';
import { AbstractEdmFieldWriteImage } from '@sdk-edm/field-image';
import { AbstractEdmFieldWriteRichText } from '@sdk-edm/field-rich-text';
import { AbstractEdmFieldWriteString } from '@sdk-edm/field-string';

import { EdmPayloadSalesCatalogueCategory } from './sales-catalogue_category.payload';
import { AbstractEdmObjectPayloadSalesCatalogueCategory } from './sales-catalogue_category.payload.types';

export interface AbstractEdmObjectWriteSalesCatalogueCategoryBasicData extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataSalesCatalogueCategoryBasicData;
  name: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
  description: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteRichText>;
  avatar: AbstractEdmFieldWriteImage;
  banner_sm: AbstractEdmFieldWriteImage;
  banner_md: AbstractEdmFieldWriteImage;
  banner_lg: AbstractEdmFieldWriteImage;
  banner_xl: AbstractEdmFieldWriteImage;
}

export interface AbstractEdmObjectWriteSalesCatalogueCategory extends AbstractEdmCoreObjectWrite<EdmPayloadSalesCatalogueCategory, AbstractEdmObjectPayloadSalesCatalogueCategory> {
  metadata: AbstractEdmMetadataSalesCatalogueCategory;
  basic_data: AbstractEdmObjectWriteSalesCatalogueCategoryBasicData;

  createFormControl(): void;
  release(): void;
  getEdmUpdatePayload(): any;
  get valid(): boolean;
}
