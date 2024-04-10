import { AbstractEdmFieldRead, AbstractEdmFieldWrite } from './field';


export type AbstractEdmFieldReadString = AbstractEdmFieldRead<string, string> & {
  isNullOrEmpty(): boolean;
  release(): void;
  load(): void;
}

export type AbstractEdmFieldWriteString = AbstractEdmFieldWrite<string> & {
  isNullOrEmpty(): boolean;
  release(): void;
  createFormControl(): void;
  getEdmUpdatePayload(): any;
  get valid(): boolean;
}