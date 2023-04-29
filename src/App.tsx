
import User from './components/eps15/context/User'
import { UserContextProvider } from './components/eps15/context/UserContext'
import './style/App.css'
import MutableRef from './components/eps16/ref/MutableRef';
import DomRef from './components/eps16/ref/DomRef';

function App() {

	return (
		<>
			<MutableRef/>
			<br />
			<DomRef/>
		</>
	)
}

export default App
