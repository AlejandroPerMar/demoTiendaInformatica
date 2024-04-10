import { EdmPayload } from '@sdk-datamodel-object/payload';
import { CloudDocument } from '@sdk-edm/field-document';


export type EdmPayloadWmsReceptionInvoice = {
	version?: string;
	warehouse?: string,
	provider?: string,
	id?: string,
	date?: string,
	documents?: CloudDocument[],
	discount?: string,
	total_price_no_tax?: string,
	total_price_with_tax?: string,
}

export type EdmPayloadWmsReceptionItem = {
	version?: string;
	itemid?: string;
	quantity?: string;
	unit_price?: string;
	total_price?: string;
}

export type EdmPayloadWmsReceptionTax = {
	version?: string;
	taxid?: string;
	amount?: string,
}

export type EdmPayloadWmsReceptionVersion = {
	version?: string;
	created_time?: string;
	created_user?: string,
	deleted?: boolean,
}

export type EdmPayloadWmsReception = EdmPayload & {
	invoice: EdmPayloadWmsReceptionInvoice[],
	item: EdmPayloadWmsReceptionItem[],
	tax: EdmPayloadWmsReceptionTax[],
	version: EdmPayloadWmsReceptionVersion[],
}