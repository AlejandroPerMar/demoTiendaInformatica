import { I18nListEntry } from '@i18n/i18n';
import { Controller, I18nSubscriber } from '@sdk-ts/controller';

import { AbstractEdmFieldRead, AbstractEdmFieldWrite } from './field';


export interface AbstractEdmFieldReadList extends AbstractEdmFieldRead<string, I18nListEntry>, I18nSubscriber {
  code: string;
  controller: Controller;
}

export interface AbstractEdmFieldWriteList extends AbstractEdmFieldWrite<I18nListEntry> {
  editValue: I18nListEntry;
  load(controller: Controller): Promise<void>;
}
