/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import NewTodoForm from './components/NewTodoForm'
import TodoList from './components/TodoList'

const APP_ID = 'my-todo-app'

function App () {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem(APP_ID)

    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem(APP_ID, JSON.stringify(todos))
  }, [todos])

  const addTodo = (newTodo) => {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newTodo, completed: false }
      ]
    })

    console.log(todos)
  }

  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) return { ...todo, completed }

        return todo
      })
    })
  }

  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}

export default App
