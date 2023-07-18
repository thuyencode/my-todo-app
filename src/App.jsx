/* eslint-disable no-undef */
import NewTodoForm from './components/NewTodoForm'
import TodoList from './components/TodoList'
import ToggleDarkMode from './components/ToggleDarkMode'
import { StateProvider } from './contexts/Context'

function App () {
  return (
    <StateProvider>
      <ToggleDarkMode />
      <NewTodoForm />
      <TodoList />
    </StateProvider>
  )
}

export default App
