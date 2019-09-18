import React, { Component } from 'react';
import AddTodo from './components/AddTodo/AddTodo.js';
import TodoList from './components/TodoList/TodoList.js';
import TodoLeft from './components/TodoLeft/TodoLeft.js';


class TodoProject extends Component {
  render() {
    return <div>
      <AddTodo />
      <TodoList />
      <TodoLeft />
    </div>
  }
}

export default TodoProject;