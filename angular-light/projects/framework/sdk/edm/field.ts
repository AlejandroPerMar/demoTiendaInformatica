import { FormControl } from '@angular/forms';

import { AbstractEdmMetadataField } from './metadata';

export interface AbstractEdmAbstractField {
  metadata: AbstractEdmMetadataField;
  release(): void;
  isNullOrEmpty(): boolean;
}

export interface AbstractEdmFieldWrite<T> extends AbstractEdmAbstractField {
  control: FormControl;
  ignoreMandatory: boolean;
  forceMandatory: boolean;
  getter: () => T;
  createFormControl(): void;
  getEdmUpdatePayload(): any;
  get valid(): boolean;
}

export interface AbstractEdmFieldRead<T, U> extends AbstractEdmAbstractField {
  value: T;
  getter: () => U;
  load(): void;
}