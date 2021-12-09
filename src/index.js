
import { crearTodoHtml, saludar } from './js/componentes';

import { Todo, TodoList } from './classes'

import './styles.css';

export const todoList = new TodoList();

todoList.todos.forEach( crearTodoHtml );

console.log('todos', todoList.todos);