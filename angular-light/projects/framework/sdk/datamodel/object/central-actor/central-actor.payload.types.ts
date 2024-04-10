import { AbstractEdmCoreObject } from '@sdk-edm/core';

import { EdmPayloadCentralActor } from './central-actor.payload';
import { AbstractEdmObjectReadCentralActor } from './central-actor.read.types';
import { AbstractEdmObjectWriteCentralActor } from './central-actor.write.types';

export interface AbstractEdmObjectPayloadCentralActor extends AbstractEdmCoreObject<EdmPayloadCentralActor, AbstractEdmObjectReadCentralActor, AbstractEdmObjectWriteCentralActor> {
}