"use strict"
//{
  //  id: 1,
    //text: "todo",
    //is_completed: false, 
// }

const todos = [];

const createTodo = (todos, text) => {
  const newTodo = {id: todos.length + 1, text: text, is_completed: false};
  todos.push(newTodo);
  return newTodo;
};

const CompleteTodo = (todos, id) => {
  const todo = todos.find(todo => todo.id === id);
  if (todo) {
    todo.is_completed = true;
  }
  return todo;
};

const deleteTodo = (todos, id) => {
  const index = todos.findIndex(todo => todo.id === id);
  if (index !== -1) {
    const deletedTodo = todos[index];
    todos.splice(index, 1);
    return deletedTodo;
  }
  return undefined;
};