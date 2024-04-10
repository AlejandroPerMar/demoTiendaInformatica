import { EdmPayload } from '@sdk-datamodel-object/payload';

export type EdmPayloadAccountingTaxBasicData = {
  name: string;
  rate: string;
}

export type EdmPayloadAccountingTax = EdmPayload & {
  basic_data: EdmPayloadAccountingTaxBasicData;
}