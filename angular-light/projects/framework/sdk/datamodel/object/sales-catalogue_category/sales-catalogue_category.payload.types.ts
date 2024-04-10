import { AbstractEdmCoreObject } from '@sdk-edm/core';

import { EdmPayloadSalesCatalogueCategory } from './sales-catalogue_category.payload';
import { AbstractEdmObjectReadSalesCatalogueCategory } from './sales-catalogue_category.read.types';
import { AbstractEdmObjectWriteSalesCatalogueCategory } from './sales-catalogue_category.write.types';

export interface AbstractEdmObjectPayloadSalesCatalogueCategory extends AbstractEdmCoreObject<EdmPayloadSalesCatalogueCategory, AbstractEdmObjectReadSalesCatalogueCategory, AbstractEdmObjectWriteSalesCatalogueCategory> {
}