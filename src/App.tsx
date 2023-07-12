import TodoList from './components/TodoList'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <ToastContainer />
      <div className='w-full flex flex-col items-center h-screen justify-center'>
        <h1 className='text-4xl font-bold mb-5'>React Todo</h1>
        <TodoList />
      </div>
    </>
  )
}

export default App
