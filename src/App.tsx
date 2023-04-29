
import User from './components/eps15/context/User'
import { UserContextProvider } from './components/eps15/context/UserContext'
import './style/App.css'

function App() {

	return (
		<>
			<UserContextProvider>
				<User />
			</UserContextProvider>
		</>
	)
}

export default App
