import { useState } from "react"
import "./App.css"

export default function App() {
    const data = [
        { value: "Usama", isEditing: false },
        { value: "Umama", isEditing: true },
        { value: "Sabir", isEditing: false }]
    let [todos, setTodos] = useState(data)
    const [newTodo, setNewTodo] = useState('')

    function addTodo() {
        const newTodoItem = {
            value: newTodo,
            isEditing: false
        }
        setTodos(todos.concat(newTodoItem))
        setNewTodo("")
    }

    const editTodo = index => {
        let newArr = [...todos]
        newArr[index].isEditing = true
        setTodos(newArr);
    };

    const handleChange = (event, index) =>{
        let newArr = [...todos]
        newArr[index].value = event.target.value
        setTodos(newArr);
    }

    const updateTodo = index => {
        let newArr = [...todos]
        newArr[index].isEditing = false
        setTodos(newArr);
    };

    const deleteTodo = index => {
        let newArr = [...todos]
        newArr.splice(index,1)
        setTodos(newArr);
    };

    return (
        <div>
            <h1>Todo App</h1>
            <div>
                <input type="text" placeholder="Enter Your Todo Item" value={newTodo}
                    onChange={(event) => setNewTodo(event.target.value)}
                />
                <button onClick={addTodo}>Add Todo</button>
                {todos.map((todo, index) => {
                    return <div key={index} className="todo">
                        {todo.isEditing ?
                            <input type="text" value={todo.value} onChange={event => handleChange(event, index)}/>
                            :
                            <p>{todo.value}</p>}
                        {todo.isEditing ?
                            <button onClick={() => updateTodo(index)}>Update</button>
                            :
                            <button onClick={() => editTodo(index)}>Edit</button>}
                        <button onClick={() => deleteTodo(index)}>Delete</button>
                    </div>
                })}
            </div>
        </div>
    )
}