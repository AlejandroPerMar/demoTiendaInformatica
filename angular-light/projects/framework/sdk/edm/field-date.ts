import { I18nSubscriber } from '@sdk-ts/controller';

import { AbstractEdmFieldRead, AbstractEdmFieldWrite } from './field';

export interface AbstractEdmFieldReadDate extends AbstractEdmFieldRead<string, string>, I18nSubscriber {
  date_: Date;
}

export interface AbstractEdmFieldWriteDate extends AbstractEdmFieldWrite<string> {
  date_: Date;
  set date(date: Date);
}