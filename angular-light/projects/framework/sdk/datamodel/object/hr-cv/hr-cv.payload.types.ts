import { AbstractEdmCoreObject } from '@sdk-edm/core';

import { EdmPayloadHrCv } from './hr-cv.payload';
import { AbstractEdmObjectReadHrCv } from './hr-cv.read.types';
import { AbstractEdmObjectWriteHrCv } from './hr-cv.write.types';

export interface AbstractEdmObjectPayloadHrCv extends AbstractEdmCoreObject<EdmPayloadHrCv, AbstractEdmObjectReadHrCv, AbstractEdmObjectWriteHrCv> {
}
