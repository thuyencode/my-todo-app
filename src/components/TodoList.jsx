import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import TodoListTitle from './TodoListTitle'
import Icon from './Icon'

function TodoList ({ todos, toggleTodo, deleteTodo }) {
  return (
    <div className='flex w-full flex-col overflow-y-auto text-lg md:w-1/2'>
      <TodoListTitle todoLength={todos.length} />

      <div className='max-h-full overflow-y-auto rounded-md bg-gray-200 p-2.5 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-md dark:bg-slate-900'>
        {todos.length === 0 && (
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
        )}

        <ul className='space-y-1'>
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
        </ul>
      </div>
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoList
