import { I18nListEntry } from '@i18n/i18n';
import { EdmPayload } from '@sdk-datamodel-object/payload';

export type EdmPayloadSalesSettingsBasicData = {
  logo: string;
  invoice_model: number;
  delivery_model: number;
  quotation_model: number;
  receipt_model: number;
  legal_entity_name: string;
  address_line: string;
  additional_information: string;
  city: string;
  postal_code: string;
  country: I18nListEntry;
  region: I18nListEntry;
  bank_name: string;
  bank_account_name: string;
  bank_account_number: string;
  paypal: string;
}

export type EdmPayloadSalesSettings = EdmPayload & {
  basic_data: EdmPayloadSalesSettingsBasicData;
}