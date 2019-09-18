import mobx, { observable, action, computed, autorun } from 'mobx';
import { homeList } from "./home"
import { from } from 'rxjs/internal/observable/from';
class Todo {
    @observable id = Math.random();
    @observable title = "";
    @observable finished = false;

    constructor(title) {
        this.title = title;
    }

    @action finishedToggle() {
        this.finished = !this.finished;
    }
}

class TodoList {
    @observable todos = [];
    @action createTodo(title) {
        let TD = new Todo(title)
        console.log(TD, "=====");

        this.todos.push(TD);
    }
    @action delTodo(todo) {
        // remove非数组自带方法，是mobx-react提供的
        this.todos.remove(todo);
    }
    // 计算属性
    @computed get unfinished() {
        return this.todos.filter(todo => !todo.finished).length;
    }

}

let todoList = new TodoList();
export { todoList, homeList };