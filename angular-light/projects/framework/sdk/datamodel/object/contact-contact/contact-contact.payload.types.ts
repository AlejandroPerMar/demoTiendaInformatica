import { AbstractEdmCoreObject } from '@sdk-edm/core';

import { EdmPayloadContactContact } from './contact-contact.payload';
import { AbstractEdmObjectReadContactContact } from './contact-contact.read.types';
import { AbstractEdmObjectWriteContactContact } from './contact-contact.write.types';


export interface AbstractEdmObjectPayloadContactContact extends AbstractEdmCoreObject<EdmPayloadContactContact, AbstractEdmObjectReadContactContact, AbstractEdmObjectWriteContactContact> {
}
