import PropTypes from 'prop-types'
import Icon from './Icon'

function TodoItem ({ id, title, completed, toggleTodo, deleteTodo }) {
  return (
    <li className='inline-flex w-full items-center space-x-2 rounded-md hover:bg-gray-300 dark:hover:bg-slate-800'>
      <input
        className='checkbox-primary checkbox checkbox-xs'
        type='checkbox'
        id={id}
        checked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label className='grow' htmlFor={id}>
        {title}
      </label>
      <button
        className='group btn btn-error btn-outline btn-xs ml-auto rounded-md capitalize'
        onClick={() => deleteTodo(id)}
      >
        <span className='inline-flex items-center text-sm group-hover:text-white'>
          Delete
          <Icon id='trash' className='ml-1 h-4 w-4 stroke-2' />
        </span>
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoItem
