import { Controller } from '@sdk-ts/controller';
import { BehaviorSubject } from 'rxjs';

export interface AbstractEdmCoreDatasetRead {
  controller: Controller
  load(): void;
  release(): void;
  isEmpty(): boolean;
}

export interface AbstractEdmCoreDatasetWrite {
  controller: Controller;
  createFormControl(): void;
  release(): void;
  waitUntilReady(): Promise<any>;
  loadGUI(): void;
  getEdmUpdatePayload(): any;
  get valid(): boolean;
}

export interface AbstractEdmCoreObjectRead<U, T extends AbstractEdmCoreObject<U, any, any>> {
  controller: Controller;
  payload: T;
  release(): void;
}

export interface AbstractEdmCoreObjectWrite<U, T extends AbstractEdmCoreObject<U, any, any>> {
  controller: Controller;
  payload: T;
  release(): void;
  getEdmUpdatePayload(): any;
  get valid(): boolean;
}

export interface AbstractEdmCoreObject<T, U extends AbstractEdmCoreObjectRead<T, AbstractEdmCoreObject<any, any, any>>, V extends AbstractEdmCoreObjectWrite<T, AbstractEdmCoreObject<any, any, any>>> {
  onChange: BehaviorSubject<boolean>;
  controller: Controller;
  payload: T;
  update(payload: any): void;
  read(): U;
  write(): Promise<V> | V;
  asyncLoadWrite?: () => void;
}