import React, { useState, useRef, useEffect } from "react"
import TodoList from "./TodoList"
import uuidv4 from "uuid/v4"
const LOCAL_STORAGE_KEY = "todoApp.todos"

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "todo 1", complete: false },
  ])
  const todoNameRef = useRef()

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === "") return
    console.log(name)
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
    })
    todoNameRef.current.value = ""
  }
  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todos</button>
      <button>Clear Completed Todos</button>
      <div>0 left to do</div>
    </>
  )
}
export default App
