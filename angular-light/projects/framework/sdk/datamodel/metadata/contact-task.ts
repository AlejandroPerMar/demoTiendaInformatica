import { AbstractEdmMetadataDataset, AbstractEdmMetadataField } from '@sdk-edm/metadata';

export interface AbstractEdmMetadataTaskTodoBasicData extends AbstractEdmMetadataDataset {
  status: AbstractEdmMetadataField;
  title: AbstractEdmMetadataField;
  priority: AbstractEdmMetadataField;
  due_date: AbstractEdmMetadataField;
  processed_by: AbstractEdmMetadataField;
  comments: AbstractEdmMetadataField;
  documents: AbstractEdmMetadataField;
}

export interface AbstractEdmMetadataTaskTodo {
  basic_data: AbstractEdmMetadataTaskTodoBasicData;
}

