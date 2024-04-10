import { EdmCoreDatasetWrite } from '@core-edm/core';
import { AbstractEdmMetadataProductServiceDescriptionBasicData } from '@sdk-datamodel-metadata/product-service-description';
import { AbstractEdmFieldWriteArray } from '@sdk-edm/field-array';
import { AbstractEdmFieldWriteBoolean } from '@sdk-edm/field-boolean';
import { AbstractEdmFieldWriteExternalUrl } from '@sdk-edm/field-external-url';
import { AbstractEdmFieldWriteI18n } from '@sdk-edm/field-i18n';
import { AbstractEdmFieldWriteImage } from '@sdk-edm/field-image';
import { AbstractEdmFieldWriteList } from '@sdk-edm/field-list';
import { AbstractEdmFieldWriteRichText } from '@sdk-edm/field-rich-text';
import { AbstractEdmFieldWriteString } from '@sdk-edm/field-string';
import { AbstractEdmFieldWriteYoutube } from '@sdk-edm/field-youtube';


export interface AbstractEdmObjectWriteProductServiceDescription extends EdmCoreDatasetWrite {
	metadata: AbstractEdmMetadataProductServiceDescriptionBasicData;
	avatar: AbstractEdmFieldWriteImage;
	name: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteString>;
	barcode: AbstractEdmFieldWriteString;
	brand: AbstractEdmFieldWriteString;
	measure_unit: AbstractEdmFieldWriteList;
	qrcode: AbstractEdmFieldWriteString;
	pictures: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteArray<AbstractEdmFieldWriteImage>>;
	description_short_text: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteRichText>;
	description_pictures: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteArray<AbstractEdmFieldWriteImage>>;
	description_long_text: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteRichText>;
	description_youtubes: AbstractEdmFieldWriteI18n<AbstractEdmFieldWriteArray<AbstractEdmFieldWriteYoutube>>;
	description_external_links: AbstractEdmFieldWriteArray<AbstractEdmFieldWriteExternalUrl>;
	allow_comments: AbstractEdmFieldWriteBoolean;
	active: AbstractEdmFieldWriteBoolean;
}