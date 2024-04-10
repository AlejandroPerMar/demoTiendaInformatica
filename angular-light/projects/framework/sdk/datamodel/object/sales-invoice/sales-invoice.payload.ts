import { EdmPayloadSalesSale } from '@sdk-datamodel-object/sales-sale/sales-sale.payload';


export type EdmPayloadSalesInvoiceBasicData = {
	purchase_order: string,
	due_date: string,
	status: string,
	comments: string,
}

export type EdmPayloadSalesInvoice = EdmPayloadSalesSale & {
	invoice: EdmPayloadSalesInvoiceBasicData,
}