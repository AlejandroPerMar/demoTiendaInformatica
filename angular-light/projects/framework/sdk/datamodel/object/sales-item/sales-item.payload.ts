import { EdmPayload } from '@sdk-datamodel-object/payload';
import { EdmPayloadProductServiceDescription } from '@sdk-datamodel-object/product_service/product_service.payload';


export type EdmPayloadSalesItemDiscount = {
	valid_from?: string,
	valid_to?: string,
	percentage?: string,
	amount?: string,
	created_by?: string,
	created_at?: string,
}

export type EdmPayloadSalesItemPrice = {
	valid_from?: string,
	unit_price?: string,
	created_by?: string,
	created_at?: string,
}

export type EdmPayloadSalesItemTax = {
	taxid?: string,
}

export type EdmPayloadSalesItem = EdmPayload & {
	description: EdmPayloadProductServiceDescription,
	discount: EdmPayloadSalesItemDiscount[],
	price: EdmPayloadSalesItemPrice[],
	tax: EdmPayloadSalesItemTax[]
}