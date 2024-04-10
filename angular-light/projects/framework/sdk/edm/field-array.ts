import { AbstractEdmAbstractField, AbstractEdmFieldRead, AbstractEdmFieldWrite } from './field';

export interface AbstractEdmFieldArray<T extends AbstractEdmFieldRead<any, any> | AbstractEdmFieldWrite<any>> extends AbstractEdmAbstractField {
  rows: T[];
  push(row: any): void;
  push_and_return(row: any): T;
}

export interface AbstractEdmFieldWriteArray<T extends AbstractEdmFieldWrite<any>> extends AbstractEdmFieldArray<T> {
  ignoreMandatory: boolean;
  get valid(): boolean;
  remove(item: T): void;
  getEdmUpdatePayload(): any;
}


export interface AbstractEdmFieldReadArray<T extends AbstractEdmFieldRead<any, any>> extends AbstractEdmFieldArray<T> {
  load(): void;
}
