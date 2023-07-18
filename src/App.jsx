/* eslint-disable no-undef */
import NewTodoForm from './components/NewTodoForm'
import TodoList from './components/TodoList'
import { StateProvider } from './contexts/Context'

function App () {
  return (
    <StateProvider>
      <NewTodoForm />
      <TodoList />
    </StateProvider>
  )
}

export default App
