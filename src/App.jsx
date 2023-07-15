/* eslint-disable no-unused-vars */
import { useState } from 'react'

function App () {
  const [newItem, setNewItem] = useState('')

  return (
    <>
      <form className='new-item-form'>
        <div className='form-row'>
          <label htmlFor='item'>New Item</label>
          <input type='text' name='item' id='item' />
        </div>
        <button className='btn'>Add</button>
      </form>
      <h1 className='header'>Todo List</h1>
      <ul className='list'>
        <li>
          <label htmlFor=''>
            <input type='checkbox' name='' id='' />
            Item 1
          </label>
          <button className='btn btn-danger'>Delete</button>
        </li>
        <li>
          <label htmlFor=''>
            <input type='checkbox' name='' id='' />
            Item 2
          </label>
          <button className='btn btn-danger'>Delete</button>
        </li>
      </ul>
    </>
  )
}

export default App
