import { AbstractEdmMetadataProductServiceDescriptionBasicData } from '@sdk-datamodel-metadata/product-service-description';
import { AbstractEdmCoreDatasetRead } from '@sdk-edm/core';
import { AbstractEdmFieldReadActor } from '@sdk-edm/field-actor';
import { AbstractEdmFieldReadBoolean } from '@sdk-edm/field-boolean';
import { AbstractEdmFieldReadExternalUrl } from '@sdk-edm/field-external-url';
import { AbstractEdmFieldReadImage } from '@sdk-edm/field-image';
import { AbstractEdmFieldReadList } from '@sdk-edm/field-list';
import { AbstractEdmFieldReadRichText } from '@sdk-edm/field-rich-text';
import { AbstractEdmFieldReadString } from '@sdk-edm/field-string';
import { AbstractEdmFieldReadTimestamp } from '@sdk-edm/field-timestamp';
import { AbstractEdmFieldReadYoutube } from '@sdk-edm/field-youtube';

export interface AbstractEdmObjectReadProductServiceDescription extends AbstractEdmCoreDatasetRead {
	metadata: AbstractEdmMetadataProductServiceDescriptionBasicData;
	avatar: AbstractEdmFieldReadImage;
	name: AbstractEdmFieldReadString;
	barcode: AbstractEdmFieldReadString;
	brand: AbstractEdmFieldReadString;
	measure_unit: AbstractEdmFieldReadList;
	qrcode: AbstractEdmFieldReadString;
	pictures: AbstractEdmFieldReadImage[];
	description_short_text: AbstractEdmFieldReadRichText;
	description_pictures: AbstractEdmFieldReadImage[];
	description_long_text: AbstractEdmFieldReadRichText;
	description_youtubes: AbstractEdmFieldReadYoutube[];
	description_external_links: AbstractEdmFieldReadExternalUrl[];
	allow_comments: AbstractEdmFieldReadBoolean;
	active: AbstractEdmFieldReadBoolean;
	updatedTime: AbstractEdmFieldReadTimestamp;
	updatedUser: AbstractEdmFieldReadActor;

	isEmptyAdditionnalData(): boolean;
}
