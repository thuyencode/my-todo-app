/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import PropTypes from 'prop-types'
import { createContext, useEffect, useRef, useState } from 'react'

const APP_ID = 'my-todo-app'

export const AppContext = createContext()

export const StateProvider = ({ children }) => {
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
    <AppContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        deleteTodo
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

StateProvider.propTypes = {
  children: PropTypes.array.isRequired
}
