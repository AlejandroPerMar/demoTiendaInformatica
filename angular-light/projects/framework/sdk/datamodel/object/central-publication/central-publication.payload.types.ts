import { AbstractEdmCoreObject } from '@sdk-edm/core';

import { EdmPayloadCentralPublication } from './central-publication.payload';
import { AbstractEdmObjectReadCentralPublication } from './central-publication.read.types';
import { AbstractEdmObjectWriteCentralPublication } from './central-publication.write.types';

export interface AbstractEdmObjectPayloadCentralPublication extends AbstractEdmCoreObject<EdmPayloadCentralPublication, AbstractEdmObjectReadCentralPublication, AbstractEdmObjectWriteCentralPublication> {
}
