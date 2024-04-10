import { ViewContainerRef } from '@angular/core';

export interface Errors {
  InternalServerErrors?: (content: ViewContainerRef) => void;
  Maintenance?: (content: ViewContainerRef) => void;
  NotFound?: (content: ViewContainerRef) => void;
  Unauthorized?: (content: ViewContainerRef) => void;
  UnknowUuid?: (content: ViewContainerRef) => void;
  ModuleNotAvailable?: (content: ViewContainerRef) => void;
  ModuleInterrupted?: (content: ViewContainerRef) => void;
  SessionExpired?: (content: ViewContainerRef) => void;
}