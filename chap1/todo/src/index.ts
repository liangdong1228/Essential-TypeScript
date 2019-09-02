/*
 * @Description: This file is made for
 * @Date: 2019-08-31 12:32:41
 * @LastEditTime: 2019-09-02 21:15:17
 * @Author: LeongD
 * @LastEditors: Please set LastEditors
 */


import { TodoItem } from "./todoItem";
import { TodoCollection } from './todoCollection';
 


// let  todos  = [
//     new TodoItem(1,'Buy Flowers'),new TodoItem(2,'Get Shoes'),
//     new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)];
let todos: TodoItem[] = [
    new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)
];


let collection: TodoCollection = new TodoCollection('Adam', todos);

console.clear();
console.log(`${collection.userName}'s Todo List`);


// let newId: number = collection.addTodo("Go for run");
// let todoItem: TodoItem = collection.getTodoById(newId);
// // console.log(JSON.stringify(todoItem));

// todoItem.printDetails();

collection.removeComplete()
collection.getTodoItems(true).forEach(item=>item.printDetails());

// type error 
// collection.addTodo(todoItem);


 