import { I18nListEntry } from '@i18n/i18n';
import { I18nSubscriber } from '@sdk-ts/controller';

import { AbstractEdmFieldRead, AbstractEdmFieldWrite } from './field';


export interface AbstractEdmFieldReadMultiList extends AbstractEdmFieldRead<string, I18nListEntry[]>, I18nSubscriber {
}

export interface AbstractEdmFieldWriteMultiList extends AbstractEdmFieldWrite<I18nListEntry[]> {
}