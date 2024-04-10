import { AbstractActorDeclaration } from '@sdk-ts/object-declaration';

import { AbstractEdmFieldRead, AbstractEdmFieldWrite } from './field';


export interface AbstractEdmFieldReadActor extends AbstractEdmFieldRead<string, string> {
  get type(): string;
  actor: AbstractActorDeclaration;
}

export interface AbstractEdmFieldWriteActor extends AbstractEdmFieldWrite<string> {
  get type(): string;
  actor: AbstractActorDeclaration;
}
