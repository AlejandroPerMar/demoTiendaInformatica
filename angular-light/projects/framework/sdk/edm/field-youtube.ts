import { SafeResourceUrl } from '@angular/platform-browser';

import { AbstractEdmFieldRead, AbstractEdmFieldWrite } from './field';


export interface AbstractEdmFieldReadYoutube extends AbstractEdmFieldRead<string, string> {
  url: SafeResourceUrl;
}

export interface AbstractEdmFieldWriteYoutube extends AbstractEdmFieldWrite<string> {
  validYoutubeEmbededUrl: boolean;
  get valid(): boolean;
}