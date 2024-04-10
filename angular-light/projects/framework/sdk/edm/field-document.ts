import { SafeResourceUrl } from '@angular/platform-browser';

import { AbstractEdmFieldRead, AbstractEdmFieldWrite } from './field';


export type CloudDocument = {
  src: string;
  name: string;
}

export interface AbstractEdmFieldReadDocument extends AbstractEdmFieldRead<SafeResourceUrl, CloudDocument> {
  fileName: string;
  extension: string;
  docId: string;
  src: string;
}

export interface AbstractEdmFieldWriteDocument extends AbstractEdmFieldWrite<CloudDocument> {
  docUrl: SafeResourceUrl;
  get docSrc(): string;
  set docSrc(docSrc: string);
  extension: string;
}
