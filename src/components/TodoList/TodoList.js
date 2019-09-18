import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
// import mobx from "mobx"
// import TodoItem from '../components/TodoItem/TodoItem.js';
import './Style.css';
import TodoItem from "../TodoItem/TodoItem"
import { from } from 'rxjs';

@inject('todoList', "homeList")
@observer
class TodoList extends Component {

  componentDidMount() {
    this.props.homeList.getlist()

  }
  render() {
    let todoList = this.props.todoList;
    let todos = todoList.todos;
    console.log(this.props.homeList);
    let { homeData } = this.props.homeList

    return <ul>
      {
        todos.map(value => {
          return <li key={value.id}>
            <TodoItem todo={value} />
            <span className="remove" onClick={() => todoList.delTodo(value)}>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-remove"></use>
              </svg>
            </span>
          </li>
        })
      }

      {
        homeData.map(val => {
          return <li key={val.docid}>
            {
              val.digest
            }
          </li>
        })

      }

    </ul>
  }
}

export default TodoList;