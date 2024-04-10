import { I18nListEntry } from '@i18n/i18n';
import { EdmPayload } from '@sdk-datamodel-object/payload';
import { CloudDocument } from '@sdk-edm/field-document';


export type EdmPayloadContactContractBasicData = {
	label?: string,
	contract_id?: string,
	signature_date?: string,
	description?: string,
	documents?: CloudDocument[],
}

export type EdmPayloadContactContractComment = {
	uuid: string;
	comment?: string,
	date?: string,
	author?: string,
	documents?: CloudDocument[],
}

export type EdmPayloadContactContractPurchaseOrder = {
	type: string;
	uuid: string,
	_seqnr?: number,
	order_id?: string;
	date?: string;
	description?: string,
	price?: string;
	currency?: I18nListEntry,
	documents?: CloudDocument[],
}

export type EdmPayloadContactContract = EdmPayload & {
	basic_data: EdmPayloadContactContractBasicData,
	comment: EdmPayloadContactContractComment[],
	purchase_order: EdmPayloadContactContractPurchaseOrder[],
}