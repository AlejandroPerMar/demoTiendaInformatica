import { AbstractEdmCoreObject } from '@sdk-edm/core';

import { EdmPayloadCmsPage } from './cms-page.payload';
import { AbstractEdmObjectReadCmsPage } from './cms-page.read.types';
import { AbstractEdmObjectWriteCmsPage } from './cms-page.write.types';

export interface AbstractEdmObjectPayloadCmsPage extends AbstractEdmCoreObject<EdmPayloadCmsPage, AbstractEdmObjectReadCmsPage, AbstractEdmObjectWriteCmsPage> {
}
