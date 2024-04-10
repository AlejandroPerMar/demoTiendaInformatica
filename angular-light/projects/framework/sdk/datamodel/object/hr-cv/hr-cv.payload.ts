import { I18nItem } from '@i18n/i18n';
import { EdmPayload } from '@sdk-datamodel-object/payload';

export type EdmPayloadHrCvBasicData = {
	firstname: string;
	lastname: string;
	avatar: string;
	public: boolean;
	template: number;
	title: I18nItem<string>;
	summary: I18nItem<string[]>;
	address_line_1: string;
	address_line_2: string;
	address_line_3: string;
	phone_1: string;
	phone_2: string;
	email_1: string;
	email_2: string;
	skills: I18nItem<string[]>;
	certifications: string[];
	interest: I18nItem<string[]>;
	education: [{
		institution_name: string,
		course: I18nItem<string>;
		start_date: string;
		on_going: boolean;
		end_date: string;
		description: I18nItem<string>;
	}],
	experience: [{
		position: I18nItem<string>;
		company: string;
		start_date: string;
		on_going: boolean;
		end_date: string;
		description: I18nItem<string>;
	}],
	language: [{
		language: string;
		level: string;
	}],
}

export type EdmPayloadHrCv = EdmPayload & {
	basic_data: EdmPayloadHrCvBasicData,
}