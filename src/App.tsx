
import Button from './components/eps22/html/Button'
import Input from './components/eps22/html/Input'
import './style/App.css'

function App() {

	return (
		<>
			<Button
				variant='primary'
				onClick={() => console.log('click')} >
				Primary Button
			</Button >
			<br />
			<Input />
		</>
	)
}

export default App
