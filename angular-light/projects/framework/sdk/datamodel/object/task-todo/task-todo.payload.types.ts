import { AbstractEdmCoreObject } from '@sdk-edm/core';

import { EdmPayloadTaskTodo } from './task-todo.payload';
import { AbstractEdmObjectReadTaskTodo } from './task-todo.read.types';


export interface AbstractEdmObjectPayloadTaskTodo extends AbstractEdmCoreObject<EdmPayloadTaskTodo, AbstractEdmObjectReadTaskTodo, null> {
}
