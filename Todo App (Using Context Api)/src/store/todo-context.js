import { createContext, useState } from 'react';

const TodosContext = createContext();

  export function TodosContextProvider(props) {
    const [todos, setTodos] = useState([
        { value: "Usama", isEditing: false },
        { value: "Umama", isEditing: true },
        { value: "Sabir", isEditing: false }
    ]);

    const addTodo = (newTodo,setNewTodo) => {
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

    const context = {
        todos: todos,
        addTodo,
        editTodo,
        handleChange,
        updateTodo,
        deleteTodo
      };

    return (
        <TodosContext.Provider value={context}>
          {props.children}
        </TodosContext.Provider>
      );
    }
    
    export default TodosContext;