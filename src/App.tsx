
import './style/App.css'
import List from './components/eps19/generic/List';

function App() {

	return (
		<>
			<List items={[
				'Arthur Sanders',
				'Clyde Hampton',
				'Brandon Taylor'
			]}
				onClick={(item) => console.log(item)} />
			<br />

			<List items={[1, 2, 3]}
				onClick={(item) => console.log(item)} />
			<br />

			{/* <List items={[
				{
					first: 'Seth',
					last: 'Mason'
				},
				{
					first: 'Johanna ',
					last: 'Palmer'
				},
				{
					first: 'Owen ',
					last: 'Byrd'
				},
			]}
				onClick={(item) => console.log(item)} />
			<br /> */}
		</>
	)
}

export default App
