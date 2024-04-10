import { EdmPayload } from '@sdk-datamodel-object/payload';

export type EdmPayloadWmsWarehouseBasicData = {
  avatar: string;
  name: string;
  allow_order_to_provider: boolean;
}

export type EdmPayloadWmsWarehouse = EdmPayload & {
  basic_data: EdmPayloadWmsWarehouseBasicData;
}