/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import PropTypes from 'prop-types'
import { createContext, useEffect, useRef, useState } from 'react'

const APP_ID = 'my-todo-app'
const colorSchemeDark = window.matchMedia('(prefers-color-scheme: dark)')

export const AppContext = createContext()

export const StateProvider = ({ children }) => {
  const isMounted = useRef(false)

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem(APP_ID)

    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  const [darkMode, setDarkMode] = useState(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && colorSchemeDark.matches)
    ) {
      return true
    }

    return false
  })

  useEffect(() => {
    localStorage.setItem(APP_ID, JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
      return
    }

    if (darkMode) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [darkMode])

  useEffect(() => {
    const matchColorScheme = () => {
      if ('theme' in localStorage) return

      if (colorSchemeDark.matches) document.documentElement.classList.add('dark')
      else document.documentElement.classList.remove('dark')
    }

    colorSchemeDark.addEventListener('change', matchColorScheme)

    return () => {
      colorSchemeDark.removeEventListener('change', matchColorScheme)
    }
  })

  const toggleDarkMode = () => {
    const nextDarkMode = !darkMode

    setDarkMode(nextDarkMode)
    localStorage.theme = nextDarkMode ? 'dark' : 'light'
  }

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
        deleteTodo,
        darkMode,
        setDarkMode,
        toggleDarkMode
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

StateProvider.propTypes = {
  children: PropTypes.array.isRequired
}
