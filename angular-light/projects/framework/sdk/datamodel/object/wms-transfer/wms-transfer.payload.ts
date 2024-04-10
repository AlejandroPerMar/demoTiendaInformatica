import { EdmPayload } from '@sdk-datamodel-object/payload';

export type EdmPayloadWmsTransferBasicData = {
	id: string;
	warehouse_emmiter: string;
	warehouse_receiver: string;
	priority: string;
	status: string;
	comments: string[];
	comments_author: string[];
	comments_timestamp: string[];
	created_at: string;
	created_by: string;
	last_updated_at: string;
	last_updated_by: string;
	status_historic: string[];
	status_historic_user: string[];
	status_historic_timestamp: string[];
}

export type EdmPayloadWmsTransferItem = {
	itemid: string;
	quantity: string;
	status: string;
	comments: string;
	historic_timestamp: string[];
	historic_user: string[];
	historic_quantity: string[];
	historic_status: string[];
	historic_comments: string[];
}

export type EdmPayloadWmsTransfer = EdmPayload & {
	basic_data: EdmPayloadWmsTransferBasicData,
	item: EdmPayloadWmsTransferItem[],
}