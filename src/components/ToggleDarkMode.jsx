import { useContext } from 'react'
import Icon from './Icon'
import { AppContext } from '../contexts/Context'

function ToggleDarkMode () {
  const {
    darkMode,
    toggleDarkMode
  } = useContext(AppContext)

  return (
    <>
      <button
        className='absolute right-0 top-0 mr-2 mt-[14px] rounded-full bg-slate-300 p-1 hover:bg-slate-800 hover:text-white focus-visible:outline-none dark:bg-slate-800 dark:hover:bg-gray-50 dark:hover:text-slate-900 lg:mr-0'
        onClick={() => toggleDarkMode()}
      >
        <Icon id={darkMode ? 'sun' : 'moon'} className='h-6 w-6 stroke-2' />
      </button>
    </>
  )
}

export default ToggleDarkMode
