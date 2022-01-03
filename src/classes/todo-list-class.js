import { Todo } from "./todo.class";
import { countTodo } from "../js/componentes";

export class TodoList {
      constructor() {
            this.cargarLocalStorage();
            this.countTodo();
      }

      nuevoTodo(todo) {
            this.todos.push(todo);
            this.guardarLocalStorage();
      }

      eliminarTodo(id) {

            this.todos = this.todos.filter(todo => todo.id != id);
            this.guardarLocalStorage();
      }

      marcarCompletado(id) {

            for (const todo of this.todos) {

                  if (todo.id == id) {

                        todo.completado = !todo.completado;
                        this.guardarLocalStorage();
                        break;

                  }
            }

      }

      eliminarCompletados() {

            this.todos = this.todos.filter(todo => !todo.completado);
            this.guardarLocalStorage();

      }

      /*
      LOCAL STORAGE
     */
      guardarLocalStorage() {

            localStorage.setItem('todo', JSON.stringify(this.todos));

      }

      cargarLocalStorage() {

            this.todos = (localStorage.getItem('todo')) ? // if
                  this.todos = JSON.parse( localStorage.getItem('todo') ) 
                  : []; // else arreglo vacio = this.todos= [ ];

            // this.todos = this.todos.map( obj => Todo.fromJson( obj ));
            this.todos = this.todos.map( Todo.fromJson );

      }

      countTodo() {
            let pendientes = 0;
            let countBox = countTodo.firstElementChild;
            for (let todo of this.todos) {
                (!todo.completado === true) ? pendientes++ : null;
            }
            countBox.innerHTML = pendientes;
      }

}