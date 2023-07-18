import { useContext, useState } from 'react'
import { AppContext } from '../contexts/Context'
import Icon from './Icon'

function NewTodoForm () {
  const { addTodo } = useContext(AppContext)
  const [newTodo, setNewTodo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (newTodo === '') return

    addTodo(newTodo)
    setNewTodo('')
  }

  return (
    <form
      className='new-item-form flex w-full flex-col space-y-3 md:w-1/2'
      onSubmit={handleSubmit}
    >
      <label className='text-xl font-semibold' htmlFor='newtodo'>
        <span className='mr-1'>🤔</span>
        New Todo
      </label>
      <input
        className='input input-accent rounded-md bg-white p-2.5 focus:outline-offset-0 dark:bg-slate-900'
        type='text'
        name='newtodo'
        id='newtodo'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />

      <button
        className='group btn btn-info btn-active btn-sm rounded-md capitalize'
        type='submit'
      >
        <span className='inline-flex items-center group-hover:text-white'>
          Add
          <Icon id='plus' className='ml-1 h-4 w-4 stroke-2' />
        </span>
      </button>
    </form>
  )
}

export default NewTodoForm
