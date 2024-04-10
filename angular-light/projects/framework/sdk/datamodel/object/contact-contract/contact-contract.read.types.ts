import { AbstractEdmMetadataContactContract, AbstractEdmMetadataContactContractBasicData, AbstractEdmMetadataContactContractComment, AbstractEdmMetadataContactContractPurchaseOrder } from '@sdk-datamodel-metadata/contact-contract';
import { AbstractEdmCoreDatasetRead, AbstractEdmCoreObjectRead } from '@sdk-edm/core';
import { AbstractEdmFieldReadActor } from '@sdk-edm/field-actor';
import { AbstractEdmFieldReadDate } from '@sdk-edm/field-date';
import { AbstractEdmFieldReadDecimal } from '@sdk-edm/field-decimal';
import { AbstractEdmFieldReadDocument } from '@sdk-edm/field-document';
import { AbstractEdmFieldReadList } from '@sdk-edm/field-list';
import { AbstractEdmFieldReadRichText } from '@sdk-edm/field-rich-text';
import { AbstractEdmFieldReadString } from '@sdk-edm/field-string';
import { AbstractEdmFieldReadTimestamp } from '@sdk-edm/field-timestamp';

import { EdmPayloadContactContract } from './contact-contract.payload';
import { AbstractEdmObjectPayloadContactContract } from './contact-contract.payload.types';


export interface AbstractEdmObjectReadContactContractBasicData extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataContactContractBasicData;
  label: AbstractEdmFieldReadString;
  contract_id: AbstractEdmFieldReadString;
  signature_date: AbstractEdmFieldReadDate;
  description: AbstractEdmFieldReadRichText;
  documents: AbstractEdmFieldReadDocument[];
}


export interface AbstractEdmObjectReadContactContractComment extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataContactContractComment;
  comment: AbstractEdmFieldReadRichText;
  documents: AbstractEdmFieldReadDocument[];
  date: AbstractEdmFieldReadTimestamp;
  author: AbstractEdmFieldReadActor;
}


export interface AbstractEdmObjectReadContactContractPurchaseOrder extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataContactContractPurchaseOrder;
  uuid: string;
  order_id: AbstractEdmFieldReadString;
  date: AbstractEdmFieldReadDate;
  description: AbstractEdmFieldReadRichText;
  price: AbstractEdmFieldReadDecimal;
  currency: AbstractEdmFieldReadList;
  documents: AbstractEdmFieldReadDocument[];
}


export interface AbstractEdmObjectReadContactContract extends AbstractEdmCoreObjectRead<EdmPayloadContactContract, AbstractEdmObjectPayloadContactContract> {
  metadata: AbstractEdmMetadataContactContract;
  basicData: AbstractEdmObjectReadContactContractBasicData;
  comments: AbstractEdmObjectReadContactContractComment[];
  issuedPOs: AbstractEdmObjectReadContactContractPurchaseOrder[];
  receivedPOs: AbstractEdmObjectReadContactContractPurchaseOrder[];

  load(): void;
  release(): void;
}
