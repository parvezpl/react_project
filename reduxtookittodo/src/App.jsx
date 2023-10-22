import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
function App() {


  return (
    <>
      <h1 className=' bg-green-400'>Learn about redux toolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
