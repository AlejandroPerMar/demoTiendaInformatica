import { EdmPayload } from '@sdk-datamodel-object/payload';
import { EdmPayloadProductServiceDescription } from '@sdk-datamodel-object/product_service/product_service.payload';


export type EdmPayloadWmsItemRawMaterial = {
	uuid: string,
	_seqnr?: number,
	item?: string,
	quantity?: string
}

export type EdmPayloadWmsItemReview = {
	uuid: string,
	_seqnr?: number,
	comment: string,
	rating: number,
}

export type EdmPayloadWmsItem = EdmPayload & {
	description: EdmPayloadProductServiceDescription,
	raw_material: EdmPayloadWmsItemRawMaterial[],
}