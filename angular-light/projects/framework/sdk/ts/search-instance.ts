import { AbstractActorDeclaration } from '@sdk-ts/object-declaration';

import { DirectoryObject } from './object';

export interface AbstractDirectorySearchInstance {
  hits: DirectoryObject[];
  running: boolean;
  notFound: boolean;

  search(endpoint: string, client: AbstractActorDeclaration, object: string, queryString: string, queryLanguage: string): void;
  overview(endpoint: string, client: AbstractActorDeclaration, object: string, queryLanguage: string): void;
  cancelDirectory(): void;
  reset(): void;
}