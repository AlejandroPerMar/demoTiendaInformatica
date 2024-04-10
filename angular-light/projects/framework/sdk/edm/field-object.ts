import { AbstractActorDeclaration } from '@sdk-ts/object-declaration';

import { AbstractEdmCoreObjectRead } from './core';
import { AbstractEdmFieldRead, AbstractEdmFieldWrite } from './field';


export interface AbstractEdmFieldReadObject<U, T extends AbstractEdmCoreObjectRead<U, any>> extends AbstractEdmFieldRead<string, string> {
  get type(): string;
  object: T;

  isNullOrEmpty(): boolean;
  release(): void;
  load(): void;
}

export interface AbstractEdmFieldWriteObject<U, T extends AbstractEdmCoreObjectRead<U, any>> extends AbstractEdmFieldWrite<string> {
  get type(): string;
  object: T;

  loadFullDefinition(client: AbstractActorDeclaration, objectId: string): Promise<T>;
}