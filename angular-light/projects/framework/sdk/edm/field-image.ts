import { ChangeDetectorRef } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Controller } from '@sdk-ts/controller';
import { BehaviorSubject } from 'rxjs';

import { AbstractEdmFieldRead, AbstractEdmFieldWrite } from './field';

export interface AbstractEdmFieldReadImage extends AbstractEdmFieldRead<SafeResourceUrl, string> {
  img: string;
  controller: Controller;
}

export interface AbstractEdmFieldWriteImage extends AbstractEdmFieldWrite<string> {
  imageSrc: string;
  cropController: BehaviorSubject<string>;
  controller: Controller;
  isNewImage(): boolean;
  crop(changeDetectorRef: ChangeDetectorRef, imageWidth: number, imageHeight: number, circle: boolean, imageSrc?: string): void;
}
