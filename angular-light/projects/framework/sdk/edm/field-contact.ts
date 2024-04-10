import { AbstractEdmFieldRead, AbstractEdmFieldWrite } from './field';


export interface AbstractEdmFieldReadContact extends AbstractEdmFieldRead<string, string> {
  get type(): string;
}
export interface AbstractEdmFieldReadContactBusiness extends AbstractEdmFieldReadContact { }
export interface AbstractEdmFieldReadContactUser extends AbstractEdmFieldReadContact { }

export interface AbstractEdmFieldWriteContact extends AbstractEdmFieldWrite<string> {
  get type(): string;
}
export interface AbstractEdmFieldWriteContactBusiness extends AbstractEdmFieldWriteContact { }
export interface AbstractEdmFieldWriteContactUser extends AbstractEdmFieldWriteContact { }
