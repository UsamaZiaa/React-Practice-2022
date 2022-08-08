export default function TodoList({ todos, handleChange, updateTodo, editTodo, deleteTodo }) {
    return (<>
        {todos.map((todo, index) => {
            return <div key={index} className="todo">
                {todo.isEditing ?
                    <input type="text" value={todo.value} onChange={event => handleChange(event, index)} />
                    :
                    <p>{todo.value}</p>
                }
                {todo.isEditing ?
                    <button onClick={() => updateTodo(index)}>Update</button>
                    :
                    <button onClick={() => editTodo(index)}>Edit</button>
                }
                <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
        })}
    </>)
}