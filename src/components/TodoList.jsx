import { useContext, lazy, Suspense } from 'react'
import { AppContext } from '../contexts/Context'
import Icon from './Icon'
import TodoListTitle from './TodoListTitle'

const TodoItem = lazy(() => import('./TodoItem'))

function TodoList () {
  const { todos, toggleTodo, deleteTodo } = useContext(AppContext)

  return (
    <div className='flex w-full flex-col overflow-y-auto text-lg md:w-1/2'>
      <TodoListTitle todoLength={todos.length} />

      <div className='max-h-full overflow-y-auto rounded-md bg-gray-200 p-2.5 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-md dark:bg-slate-900'>
        {todos.length === 0
          ? (
            <>
              ⭐ Star me on{' '}
              <a
                className='link-accent link inline-flex items-center'
                href='https://github.com/thuyencode/my-todo-app'
              >
                Github{' '}
                <Icon
                  id='github'
                  className='ml-1 h-5 w-5 text-slate-900 dark:text-white'
                />
              </a>
            </>
            )
          : (
            <ul className='space-y-1'>
              <Suspense fallback={<>🧑‍🎨 Rendering todo list...</>}>
                {todos.map((todo) => {
                  return (
                    <TodoItem
                      {...todo}
                      key={todo.id}
                      toggleTodo={toggleTodo}
                      deleteTodo={deleteTodo}
                    />
                  )
                })}
              </Suspense>
            </ul>
            )}
      </div>
    </div>
  )
}

export default TodoList
