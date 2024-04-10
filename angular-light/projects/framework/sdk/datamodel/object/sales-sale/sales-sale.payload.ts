import { I18nListEntry } from '@i18n/i18n';
import { EdmPayload } from '@sdk-datamodel-object/payload';

export type EdmPayloadSalesSaleBasicData = {
  logo: string;
  id: string;
  issued_at: string;
  issued_by: string;
  subtotal: string;
  discount: string;
  taxes: string;
  total: string;
  model: number;
}


export type EdmPayloadSalesSaleItem = {
  item_id: string;
  item_name: string;
  unit_price: string;
  quantity: string;
  subtotal: string;
}


export type EdmPayloadSalesSaleTax = {
  tax_id: string;
  amount: string;
}


export type EdmPayloadSalesSaleActor = {
  emitter_legal_entity_name: string;
  emitter_address_line: string;
  emitter_additional_information: string;
  emitter_city: string;
  emitter_postal_code: string;
  emitter_country: I18nListEntry;
  emitter_region: I18nListEntry;
  emitter_bank_name: string;
  emitter_bank_account_name: string;
  emitter_bank_account_number: string;
  emitter_paypal: string;
  receiver_id: string;
  receiver_legal_entity_name: string;
  receiver_address_line: string;
  receiver_additional_information: string;
  receiver_city: string;
  receiver_postal_code: string;
  receiver_country: I18nListEntry;
  receiver_region: I18nListEntry;
}


export type EdmPayloadSalesSale = EdmPayload & {
  basic_data: EdmPayloadSalesSaleBasicData,
  item: EdmPayloadSalesSaleItem[],
  tax: EdmPayloadSalesSaleTax[],
  actor: EdmPayloadSalesSaleActor,
}