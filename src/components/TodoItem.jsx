import PropTypes from 'prop-types'
import Icon from './Icon'

function TodoItem ({ id, title, completed, toggleTodo, deleteTodo }) {
  return (
    <li className='inline-flex w-full items-center space-x-2'>
      <input
        className='checkbox-primary checkbox checkbox-xs'
        type='checkbox'
        id={id}
        checked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label htmlFor={id}>{title}</label>
      <span className='grow inline-flex'>
        <button
          className='ml-auto group btn btn-error btn-outline btn-xs capitalize'
          onClick={() => deleteTodo(id)}
        >
          <span className='inline-flex items-center text-sm group-hover:text-white'>
            Delete
            <Icon id='trash' className='ml-1 h-4 w-4 stroke-2' />
          </span>
        </button>
      </span>
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
