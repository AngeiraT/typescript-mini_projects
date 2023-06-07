"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline-sync"));
const Todo_1 = require("./Todo");
const todos = [];
function displayMenu() {
    console.log('Todo List');
    console.log('1. Add Todo');
    console.log('2. Mark Todo as Complete');
    console.log('3. List Todos');
    console.log('4. Exit');
}
function addTodo() {
    const description = readline.question('Enter a description for the todo: ');
    const todo = new Todo_1.Todo(description);
    todos.push(todo);
    console.log('Todo added!');
}
function markTodoComplete() {
    const indexStr = readline.question('Enter the index of the todo to mark as complete: ');
    const index = parseInt(indexStr, 10); // Parse the input string as an integer
    if (!isNaN(index) && index >= 0 && index < todos.length) {
        todos[index].isComplete = true;
        console.log('Todo marked as complete!');
    }
    else {
        console.log('Invalid index!');
    }
}
function listTodos() {
    console.log('Todo List:');
    todos.forEach((todo, index) => {
        console.log(`${index}. [${todo.isComplete ? 'X' : ' '}] ${todo.description}`);
    });
}
function main() {
    let choice = '';
    while (choice !== '4') {
        displayMenu();
        choice = readline.question('Enter your choice: ');
        switch (choice) {
            case '1':
                addTodo();
                break;
            case '2':
                markTodoComplete();
                break;
            case '3':
                listTodos();
                break;
            case '4':
                console.log('Goodbye!');
                break;
            default:
                console.log('Invalid choice!');
                break;
        }
        console.log();
    }
}
main();
