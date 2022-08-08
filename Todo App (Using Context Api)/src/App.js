import { useState, useContext } from "react"
import "./App.css"
import TodosContext from './store/todo-context'
import Form from "./components/form"
import TodoList from "./components/todoList"

export default function App() {
    const todoCtx = useContext(TodosContext) // console.log(todoCtx);
    const [newTodo, setNewTodo] = useState('')

    return (
        <div>
            <h1>Todo App</h1>
            <Form newTodo={newTodo} setNewTodo={setNewTodo} addTodo={todoCtx.addTodo}/>
            <TodoList todos = {todoCtx.todos} handleChange = {todoCtx.handleChange} 
                updateTodo = {todoCtx.updateTodo} editTodo = {todoCtx.editTodo}
                deleteTodo = {todoCtx.deleteTodo}
            />
        </div>
    )
}