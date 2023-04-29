import { Greeting } from './components/eps3dan4/Greeting';
import { Heading } from './components/eps5/Heading'
import { Oscar } from './components/eps5/Oscar'
import { Status } from './components/eps5/Status'
import './style/App.css'

function App() {

	return (
		<>
			<Status status='loading' />
			<Status status='success' />
			<Status status='error' />
			{/*  */}
			<Oscar>
				<Heading> Oscar goes rt Sadie Page </Heading>
			</Oscar>
			{/*  */}
			<Greeting name='Matthew Webb' isLogIn={true} />
		</>
	)
}

export default App
