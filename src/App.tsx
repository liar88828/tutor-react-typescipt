import { Greeting } from './components/Greeting'
import './style/App.css'

function App() {

  return (
    <>
      <Greeting name={'wiswash'} />
      {/* <Greeting name={10} /> */}      {/*   akan error karena bukan string*/}
    </>
  )
}

export default App
