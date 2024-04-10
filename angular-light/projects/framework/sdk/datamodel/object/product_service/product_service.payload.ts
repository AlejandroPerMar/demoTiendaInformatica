import { I18nItem, I18nListEntry } from '@i18n/i18n';

export type EdmPayloadProductServiceDescription = {
  avatar: string,
	name: I18nItem<string>,
	brand: string,
	barcode: string,
	measure_unit: I18nListEntry,
	qrcode: string,
	pictures: I18nItem<string[]>,
	description_short_text: I18nItem<string>,
	description_pictures: I18nItem<string[]>,
	description_long_text: I18nItem<string>,
	description_youtubes: I18nItem<string[]>,
	description_external_links: string[],
	allow_comments: boolean;
	active: boolean;
	updated_time: string;
	updated_user: string;
}