
import './style/App.css'
import RandomNumber from './components/eps20/restriction/RandomNumber';

function App() {

	return (
		<>
			<RandomNumber value={10} isPositive />
			<br />
			<RandomNumber value={10} isNegative />
			<br />
			<RandomNumber value={10} isZero />

		</>
	)
}

export default App
