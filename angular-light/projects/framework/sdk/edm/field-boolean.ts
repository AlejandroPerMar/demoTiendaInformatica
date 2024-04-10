import { AbstractEdmFieldRead, AbstractEdmFieldWrite } from './field';


export interface AbstractEdmFieldReadBoolean extends AbstractEdmFieldRead<boolean, boolean> {
}


export interface AbstractEdmFieldWriteBoolean extends AbstractEdmFieldWrite<boolean> {
}