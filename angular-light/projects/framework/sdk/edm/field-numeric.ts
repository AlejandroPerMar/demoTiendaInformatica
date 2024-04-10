import { AbstractEdmFieldRead, AbstractEdmFieldWrite } from './field';


export interface AbstractEdmFieldReadNumeric extends AbstractEdmFieldRead<number, number> {
}

export interface AbstractEdmFieldWriteNumeric extends AbstractEdmFieldWrite<number> {
}
