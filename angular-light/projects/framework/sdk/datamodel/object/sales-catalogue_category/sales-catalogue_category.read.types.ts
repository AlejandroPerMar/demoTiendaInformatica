import { AbstractEdmMetadataSalesCatalogueCategory, AbstractEdmMetadataSalesCatalogueCategoryBasicData } from '@sdk-datamodel-metadata/sales-catalogue-category';
import { AbstractEdmCoreDatasetRead, AbstractEdmCoreObjectRead } from '@sdk-edm/core';
import { AbstractEdmFieldReadImage } from '@sdk-edm/field-image';
import { AbstractEdmFieldReadString } from '@sdk-edm/field-string';

import { EdmPayloadSalesCatalogueCategory } from './sales-catalogue_category.payload';
import { AbstractEdmObjectPayloadSalesCatalogueCategory } from './sales-catalogue_category.payload.types';

export interface AbstractEdmObjectReadSalesCatalogueCategoryBasicData extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataSalesCatalogueCategoryBasicData;
  name: AbstractEdmFieldReadString;
  description: AbstractEdmFieldReadString;
  items: number;
  avatar: AbstractEdmFieldReadImage;
  banner: AbstractEdmFieldReadImage;
  banner_sm: AbstractEdmFieldReadImage;
  banner_md: AbstractEdmFieldReadImage;
  banner_lg: AbstractEdmFieldReadImage;
  banner_xl: AbstractEdmFieldReadImage;
}

export interface AbstractEdmObjectReadSalesCatalogueCategory extends AbstractEdmCoreObjectRead<EdmPayloadSalesCatalogueCategory, AbstractEdmObjectPayloadSalesCatalogueCategory> {
  metadata: AbstractEdmMetadataSalesCatalogueCategory;
  basic_data: AbstractEdmObjectReadSalesCatalogueCategoryBasicData;
}