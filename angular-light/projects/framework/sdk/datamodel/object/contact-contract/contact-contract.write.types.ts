import { I18nListEntry } from '@i18n/i18n';
import { AbstractEdmMetadataContactContract, AbstractEdmMetadataContactContractBasicData, AbstractEdmMetadataContactContractComment, AbstractEdmMetadataContactContractPurchaseOrder } from '@sdk-datamodel-metadata/contact-contract';
import { AbstractEdmCoreDatasetWrite, AbstractEdmCoreObjectWrite } from '@sdk-edm/core';
import { AbstractEdmFieldReadActor } from '@sdk-edm/field-actor';
import { AbstractEdmFieldWriteArray } from '@sdk-edm/field-array';
import { AbstractEdmFieldWriteDate } from '@sdk-edm/field-date';
import { AbstractEdmFieldWriteDecimal } from '@sdk-edm/field-decimal';
import { AbstractEdmFieldWriteDocument } from '@sdk-edm/field-document';
import { AbstractEdmFieldWriteList } from '@sdk-edm/field-list';
import { AbstractEdmFieldWriteRichText } from '@sdk-edm/field-rich-text';
import { AbstractEdmFieldWriteString } from '@sdk-edm/field-string';
import { AbstractEdmFieldReadTimestamp } from '@sdk-edm/field-timestamp';

import { EdmPayloadContactContract } from './contact-contract.payload';
import { AbstractEdmObjectPayloadContactContract } from './contact-contract.payload.types';
import { AbstractEdmObjectReadContactContractComment } from './contact-contract.read.types';


export interface AbstractEdmObjectWriteContactContractBasicData extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataContactContractBasicData;
  label: AbstractEdmFieldWriteString;
  contract_id: AbstractEdmFieldWriteString;
  signature_date: AbstractEdmFieldWriteDate;
  description: AbstractEdmFieldWriteRichText;
  documents: AbstractEdmFieldWriteArray<AbstractEdmFieldWriteDocument>;

  get valid(): boolean;
  addDocument(): AbstractEdmFieldWriteDocument;
}


export interface AbstractEdmObjectWriteContactContractComment extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataContactContractComment;
  uuid: string;
  comment: AbstractEdmFieldWriteRichText;
  documents: AbstractEdmFieldWriteArray<AbstractEdmFieldWriteDocument>;
  date: AbstractEdmFieldReadTimestamp;
  author: AbstractEdmFieldReadActor;

  get valid(): boolean;
  empty(): boolean;
}


export interface AbstractEdmObjectWriteContactContractPurchaseOrder extends AbstractEdmCoreDatasetWrite {
  metadata: AbstractEdmMetadataContactContractPurchaseOrder;
  type: string;
  uuid: string;
  order_id: AbstractEdmFieldWriteString;
  date: AbstractEdmFieldWriteDate;
  description: AbstractEdmFieldWriteRichText;
  price: AbstractEdmFieldWriteDecimal;
  currency: AbstractEdmFieldWriteList;
  documents: AbstractEdmFieldWriteArray<AbstractEdmFieldWriteDocument>;
}


export interface AbstractEdmObjectWriteContactContract extends AbstractEdmCoreObjectWrite<EdmPayloadContactContract, AbstractEdmObjectPayloadContactContract> {
  metadata: AbstractEdmMetadataContactContract;
  basicData: AbstractEdmObjectWriteContactContractBasicData;
  comments: AbstractEdmObjectReadContactContractComment[];
  comment: AbstractEdmObjectWriteContactContractComment;
  issuedPOs: AbstractEdmObjectWriteContactContractPurchaseOrder[];
  receivedPOs: AbstractEdmObjectWriteContactContractPurchaseOrder[];

  get validComments(): boolean;
  get validIssuedPOs(): boolean;
  get validReceivedPOs(): boolean;

  createFormControl(): void;
  release(): void;
  getEdmUpdatePayload(): any;
  get valid(): boolean;

  createIssuedPO(currency: I18nListEntry): AbstractEdmObjectWriteContactContractPurchaseOrder;
  createReceivedPO(currency: I18nListEntry): AbstractEdmObjectWriteContactContractPurchaseOrder;
}
