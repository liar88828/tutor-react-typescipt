
import './style/App.css'
import { Button } from './components/eps6/Button';
import { Input } from './components/eps6/Input';

function App() {

	return (
		<>
			{/* <Button handleClick={(event) => {
				console.log('Button Click ', event)
			}} /> */}
			<Button handleClick={
				(event, id) => {
					console.log('Button Click ', event, id)
				}
			} />
			{/*  */}
			<Input value=''
				handleChange1={(event) => console.log(event)} 
				/>
		</>
	)
}

export default App
