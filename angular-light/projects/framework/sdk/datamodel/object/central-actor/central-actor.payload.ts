import { I18nListEntry } from '@i18n/i18n';
import { EdmPayload } from '@sdk-datamodel-object/payload';
import { CloudDocument } from '@sdk-edm/field-document';


export type EdmPayloadCentralActorAddress = {
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

export type EdmPayloadCentralActorBanner = {
	display_name: string,
	catchphrase: string,
	alias: string,
	avatar: string,
	banner_sm: string,
	banner_md: string,
	banner_lg: string,
	banner_xl: string,
}

export type EdmPayloadCentralActorBusiness = {
	country: I18nListEntry,
	name: string,
	social_denomination: I18nListEntry,
	creation_date: string,
	identification: string,
	icon_app_72: CloudDocument,
	icon_app_96: CloudDocument,
	icon_app_128: CloudDocument,
	icon_app_144: CloudDocument,
	icon_app_152: CloudDocument,
	icon_app_192: CloudDocument,
	icon_app_384: CloudDocument,
	icon_app_512: CloudDocument,
}

export type EdmPayloadCentralActorGoogle = {
	business_type: I18nListEntry,
	description: I18nListEntry,
	images: string[],
	opening_hours_monday: [{
		from: string,
		to: string
	}],
	opening_hours_tuesday: [{
		from: string,
		to: string
	}],
	opening_hours_wednesday: [{
		from: string,
		to: string
	}],
	opening_hours_thursday: [{
		from: string,
		to: string
	}],
	opening_hours_friday: [{
		from: string,
		to: string
	}],
	opening_hours_saturday: [{
		from: string,
		to: string
	}],
	opening_hours_sunday: [{
		from: string,
		to: string
	}],
	address_street: string,
	address_locality: string,
	address_postalcode: string,
	address_region: string,
	address_country: string,
	phone_number: string,
	geo_latitude: string,
	geo_longitude: string,
}

export type EdmPayloadCentralActorPhone = {
	uuid: string,
	_seqnr?: number,
	label?: string,
	type?: I18nListEntry,
	phone_number?: string,
}

export type EdmPayloadCentralActorSocialNetwork = {
	facebook: string,
	instagram: string,
	linkedin: string,
	twitter: string,
	youtube: string,
}

export type EdmPayloadCentralActorUser = {
	firstname: string,
	lastname: string,
	birthdate: string,
	birthplace: I18nListEntry,
	nationalities: I18nListEntry[],
}

export type EdmPayloadCentralActor = EdmPayload & {
	address: EdmPayloadCentralActorAddress[],
	business: EdmPayloadCentralActorBusiness,
	google: EdmPayloadCentralActorGoogle,
	phone: EdmPayloadCentralActorPhone[],
	social_network: EdmPayloadCentralActorSocialNetwork,
	user: EdmPayloadCentralActorUser
}