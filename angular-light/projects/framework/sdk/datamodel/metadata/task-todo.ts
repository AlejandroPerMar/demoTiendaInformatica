import { AbstractEdmMetadataDataset, AbstractEdmMetadataField } from '@sdk-edm/metadata';

export interface AbstractEdmMetadataTaskTodoActor extends AbstractEdmMetadataDataset {
  actor: AbstractEdmMetadataField;
  xxx_updated_by: AbstractEdmMetadataField;
  xxx_updated_at: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataTaskTodoBasicData extends AbstractEdmMetadataDataset {
  contactid: AbstractEdmMetadataField;
  created_by: AbstractEdmMetadataField;
  created_at: AbstractEdmMetadataField;
  status: AbstractEdmMetadataField;
  title: AbstractEdmMetadataField;
  priority: AbstractEdmMetadataField;
  due_date: AbstractEdmMetadataField;
  comments: AbstractEdmMetadataField;
  xxx_updated_by: AbstractEdmMetadataField;
  xxx_updated_at: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataTaskTodoDocument extends AbstractEdmMetadataDataset {
  document: AbstractEdmMetadataField;
  xxx_updated_by: AbstractEdmMetadataField;
  xxx_updated_at: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataTaskTodoSubtask extends AbstractEdmMetadataDataset {
  subtask: AbstractEdmMetadataField;
  checked: AbstractEdmMetadataField;
  enabled: AbstractEdmMetadataField;
  xxx_updated_by: AbstractEdmMetadataField;
  xxx_updated_at: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataTaskTodo {
  actor: AbstractEdmMetadataTaskTodoActor;
  basic_data: AbstractEdmMetadataTaskTodoBasicData;
  document: AbstractEdmMetadataTaskTodoDocument;
  subtask: AbstractEdmMetadataTaskTodoSubtask;
}

