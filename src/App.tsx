import { Greeting } from './components/Greeting'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import './style/App.css'

function App() {
	const personName = {
		first: 'John',
		last: 'Doe',
	}


	const nameList = [{
		first: 'Cora ',
		last: 'HortonJohn',
	},
	{
		first: 'Julian ',
		last: 'WongJohn',
	}, {
		first: 'Nathan ',
		last: 'SwansonJohn',
	}
	]
	return (
		<>
			<Greeting
				name={'wiswash'}
				messageCount={10}
				isLogIn={false}
			/>
			<Person name={personName} />
			<PersonList names={nameList}/>
			{/* <Greeting name={10} /> */} {/*   akan error karena bukan string*/}
		</>
	)
}

export default App
