import { AbstractEdmCoreObject } from '@sdk-edm/core';

import { EdmPayloadContactContract } from './contact-contract.payload';
import { AbstractEdmObjectReadContactContract } from './contact-contract.read.types';
import { AbstractEdmObjectWriteContactContract } from './contact-contract.write.types';



export interface AbstractEdmObjectPayloadContactContract extends AbstractEdmCoreObject<EdmPayloadContactContract, AbstractEdmObjectReadContactContract, AbstractEdmObjectWriteContactContract> {
}
