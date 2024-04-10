import { I18nItem } from '@i18n/i18n';
import { EdmPayload } from '@sdk-datamodel-object/payload';

export type EdmPayloadSalesCatalogueCategoryBasicData = {
	name: I18nItem<string>,
	description: I18nItem<string>,
	avatar: string,
	banner_sm: string,
	banner_md: string,
	banner_lg: string,
	banner_xl: string,
	items: number;
}

export type EdmPayloadSalesCatalogueCategory = EdmPayload & {
	basic_data: EdmPayloadSalesCatalogueCategoryBasicData,
}