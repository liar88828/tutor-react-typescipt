
import './style/App.css'
import Private from './components/eps18/auth/Private';
import Profile from './components/eps18/auth/Profile';

function App() {

	return (
		<>
			<Private
				isLoggedIn={false}
				component={Profile} />
			<br />
			<Private
				isLoggedIn={true}
				component={Profile} />
		</>
	)
}

export default App
