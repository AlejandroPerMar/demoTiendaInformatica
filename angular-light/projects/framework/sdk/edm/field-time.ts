import { I18nSubscriber } from '@sdk-ts/controller';

import { AbstractEdmFieldRead, AbstractEdmFieldWrite } from './field';

export interface AbstractEdmFieldReadTime extends AbstractEdmFieldRead<string, string>, I18nSubscriber {
}

export interface AbstractEdmFieldWriteTime extends AbstractEdmFieldWrite<string> {
}
