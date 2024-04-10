import { EdmPayload } from '@sdk-datamodel-object/payload';
import { CloudDocument } from '@sdk-edm/field-document';


export type EdmPayloadTaskTodoBasicData = {
  created_by: string,
  created_at: string,
  contactid: string,

  status: string[],
  status_updated_by: string[],
  status_updated_at: string[],

  title: string[],
  title_updated_by: string[],
  title_updated_at: string[],

  priority: string,
  priority_updated_by: string[],
  priority_updated_at: string[],

  due_date: string,
  due_date_updated_by: string[],
  due_date_updated_at: string[],

  comments: string[];
  comments_author: string[];
  comments_timestamp: string[];
}

export type EdmPayloadTaskTodoActor = {
  actor: string,
  enabled: boolean[],
  updated_by: string[],
  updated_at: string[],
}

export type EdmPayloadTaskTodoDocument = {
  document: CloudDocument,
  enabled: boolean[],
  updated_by: string[],
  updated_at: string[],
}

export type EdmPayloadTaskTodoSubtask = {
  subtask: string[],
  subtask_updated_by: string[],
  subtask_updated_at: string[],

  checked: boolean[],
  checked_updated_by: string[],
  checked_updated_at: string[],

  enabled: boolean[],
  enabled_updated_by: string[],
  enabled_updated_at: string[],
}

export type EdmPayloadTaskTodo = EdmPayload & {
  basic_data: EdmPayloadTaskTodoBasicData,
  actor: EdmPayloadTaskTodoActor[],
  document: EdmPayloadTaskTodoDocument[],
  subtask: EdmPayloadTaskTodoSubtask[],
}