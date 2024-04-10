import { I18nListEntry } from '@i18n/i18n';
import { EdmPayload } from '@sdk-datamodel-object/payload';


export type EdmPayloadContactContactAddress = {
	uuid: string,
	_seqnr?: number,
	label?: string,
	address_line?: string,
	additional_information?: string,
	city?: string,
	postal_code?: string,
	country?: I18nListEntry,
	region?: I18nListEntry
}

export type EdmPayloadContactContactBasicData = {
	name: string,
	type: string,
	pending_tasks: number,
	firstname: string,
	lastname: string,
	social_denomination?: I18nListEntry,
	business_name: string,
	identification: string,
	country?: I18nListEntry,
	default_iva: string,
	customer?: boolean,
	provider?: boolean,
}

export type EdmPayloadContactContactContactPerson = {
	uuid: string,
	_seqnr?: number,
	position?: string,
	firstname?: string,
	lastname?: string,
	email1?: string,
	email2?: string,
	phone1?: string,
	phone2?: string,
	comments?: string,
}

export type EdmPayloadContactContactPhone = {
	uuid: string,
	_seqnr?: number,
	label?: string,
	type?: I18nListEntry,
	phone_number?: string,
}

export type EdmPayloadContactContact = EdmPayload & {
	address: EdmPayloadContactContactAddress[],
	basic_data: EdmPayloadContactContactBasicData,
	contact_person: EdmPayloadContactContactContactPerson[],
	phone: EdmPayloadContactContactPhone[],
}