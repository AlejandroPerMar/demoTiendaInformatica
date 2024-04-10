import { AbstractEdmFieldRead, AbstractEdmFieldWrite } from './field';


export interface AbstractEdmFieldReadExternalUrl extends AbstractEdmFieldRead<string, string> {
}

export interface AbstractEdmFieldWriteExternalUrl extends AbstractEdmFieldWrite<string> {
}
