import { AbstractEdmMetadataTaskTodo, AbstractEdmMetadataTaskTodoActor, AbstractEdmMetadataTaskTodoBasicData, AbstractEdmMetadataTaskTodoDocument, AbstractEdmMetadataTaskTodoSubtask } from '@sdk-datamodel-metadata/task-todo';
import { AbstractEdmFieldReadObjectContactContact } from '@sdk-datamodel-object/contact-contact/contact-contact.read.types';
import { AbstractEdmCoreDatasetRead, AbstractEdmCoreObjectRead } from '@sdk-edm/core';
import { AbstractEdmFieldReadDate } from '@sdk-edm/field-date';
import { AbstractEdmFieldReadDocument } from '@sdk-edm/field-document';
import { AbstractEdmFieldReadRichText } from '@sdk-edm/field-rich-text';
import { AbstractEdmFieldReadString } from '@sdk-edm/field-string';
import { AbstractEdmFieldReadTimestamp } from '@sdk-edm/field-timestamp';
import { AbstractActorDeclaration } from '@sdk-ts/object-declaration';

import { EdmPayloadTaskTodo } from './task-todo.payload';
import { AbstractEdmObjectPayloadTaskTodo } from './task-todo.payload.types';


export interface AbstractEdmObjectReadTaskTodoBasicDataStatus {
  status: string;
  updated_by: AbstractActorDeclaration;
  updated_at: AbstractEdmFieldReadTimestamp;
}
export interface AbstractEdmObjectReadTaskTodoBasicDataTitle {
  title: AbstractEdmFieldReadString;
  updated_by: AbstractActorDeclaration;
  updated_at: AbstractEdmFieldReadTimestamp;
}
export interface AbstractEdmObjectReadTaskTodoBasicDataPriority {
  priority: string;
  updated_by: AbstractActorDeclaration;
  updated_at: AbstractEdmFieldReadTimestamp;
}
export interface AbstractEdmObjectReadTaskTodoBasicDataDueDate {
  due_date: AbstractEdmFieldReadDate;
  updated_by: AbstractActorDeclaration;
  updated_at: AbstractEdmFieldReadTimestamp;
}
export interface AbstractEdmObjectReadTaskTodoBasicDataComments {
  comments: AbstractEdmFieldReadRichText;
  author: AbstractActorDeclaration;
  timestamp: AbstractEdmFieldReadTimestamp;
}
export interface AbstractEdmObjectReadTaskTodoBasicData extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataTaskTodoBasicData;
  created_by: AbstractActorDeclaration;
  created_at: AbstractEdmFieldReadTimestamp;
  contact: AbstractEdmFieldReadObjectContactContact;
  status: AbstractEdmObjectReadTaskTodoBasicDataStatus[];
  title: AbstractEdmObjectReadTaskTodoBasicDataTitle[];
  priority: AbstractEdmObjectReadTaskTodoBasicDataPriority[];
  due_date: AbstractEdmObjectReadTaskTodoBasicDataDueDate[];
  comments: AbstractEdmObjectReadTaskTodoBasicDataComments[];
  dueDateState: string;
}

export interface AbstractEdmObjectReadTaskTodoActor extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataTaskTodoActor;
  actor: AbstractActorDeclaration;
  enabled: boolean[];
  updated_by: AbstractActorDeclaration[];
  updated_at: AbstractEdmFieldReadTimestamp[];
}


export interface AbstractEdmObjectReadTaskTodoDocument extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataTaskTodoDocument;
  document: AbstractEdmFieldReadDocument;
  enabled: boolean[];
  updated_by: AbstractActorDeclaration[];
  updated_at: AbstractEdmFieldReadTimestamp[];
}

export interface AbstractEdmObjectReadTaskTodoSubtaskSubtask {
  subtask: AbstractEdmFieldReadString;
  updated_by: AbstractActorDeclaration;
  updated_at: AbstractEdmFieldReadTimestamp;
}
export interface AbstractEdmObjectReadTaskTodoSubtaskChecked {
  checked: boolean;
  updated_by: AbstractActorDeclaration;
  updated_at: AbstractEdmFieldReadTimestamp;
}
export interface AbstractEdmObjectReadTaskTodoSubtaskEnabled {
  enabled: boolean;
  updated_by: AbstractActorDeclaration;
  updated_at: AbstractEdmFieldReadTimestamp;
}
export interface AbstractEdmObjectReadTaskTodoSubtask extends AbstractEdmCoreDatasetRead {
  metadata: AbstractEdmMetadataTaskTodoSubtask;
  subtask: AbstractEdmObjectReadTaskTodoSubtaskSubtask[];
  checked: AbstractEdmObjectReadTaskTodoSubtaskChecked[];
  enabled: AbstractEdmObjectReadTaskTodoSubtaskEnabled[];
}

export interface AbstractEdmObjectReadTaskTodo extends AbstractEdmCoreObjectRead<EdmPayloadTaskTodo, AbstractEdmObjectPayloadTaskTodo> {
  metadata: AbstractEdmMetadataTaskTodo;
  basicData: AbstractEdmObjectReadTaskTodoBasicData;
  enabledActors: AbstractEdmObjectReadTaskTodoActor[];
  disabledActors: AbstractEdmObjectReadTaskTodoActor[];
  enabledDocuments: AbstractEdmObjectReadTaskTodoDocument[];
  disabledDocuments: AbstractEdmObjectReadTaskTodoDocument[];
  enabledSubtasks: AbstractEdmObjectReadTaskTodoSubtask[];
  disabledSubtasks: AbstractEdmObjectReadTaskTodoSubtask[];
  load(): void;
  release(): void;
}
