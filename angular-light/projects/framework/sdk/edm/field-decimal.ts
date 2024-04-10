import { I18nSubscriber } from '@sdk-ts/controller';

import { AbstractEdmFieldRead, AbstractEdmFieldWrite } from './field';


export interface AbstractEdmFieldReadDecimal extends AbstractEdmFieldRead<string, string>, I18nSubscriber {
}

export interface AbstractEdmFieldWriteDecimal extends AbstractEdmFieldWrite<string> {
  get valid(): boolean;
}
