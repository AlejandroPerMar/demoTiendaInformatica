import { AbstractEdmFieldRead, AbstractEdmFieldWrite } from './field';


export interface AbstractEdmFieldReadMultiLineString extends AbstractEdmFieldRead<string[], string[]> {
}

export interface AbstractEdmFieldWriteMultiLineString extends AbstractEdmFieldWrite<string[]> {
}