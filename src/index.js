import {
      Todo,
      TodoList
} from './classes'
import './styles.css';
import { crearTodoHtml } from './js/componentes.js';

export const todoList = new TodoList();

//  Manera NO simplificada
// todoList.todos.forEach ( todo => crearTodoHtml( todo) );
/*   Si lo que estamos iterando en el forEach es lo mismo que estamos
      mandando entonces podemos simplificarlo:
*/
todoList.todos.forEach( crearTodoHtml );

todoList.todos[0].imprimirClase();

console.log('todos', todoList.todos);
