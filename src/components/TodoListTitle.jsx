import PropTypes from 'prop-types'

function TodoListTitle ({ todoLength }) {
  return (
    <h1 className='mb-3 text-xl font-semibold'>
      {todoLength === 0
        ? (
          <>
            <span className='mr-1 md:hidden'>☝️</span>
            <span className='mr-1 hidden md:inline'>👈</span>
            Add More Todos
          </>
          )
        : (
          <>
            <span className='mr-1'>📑</span>
            Todo List
          </>
          )}
    </h1>
  )
}

TodoListTitle.propTypes = {
  todoLength: PropTypes.number.isRequired
}

TodoListTitle.defaultProps = {
  todoLength: 0
}

export default TodoListTitle
