
import './style/App.css'
import Text from './components/eps24/Polymorphic/Text';

function App() {

	return (
		<>
			<Text as='h1' size='lg' >Heading</Text>
			<Text as='p' size='md' >Paragraph</Text>
			<Text
				as='label'
				htmlFor='someId'
				size='lg'
				color='secondary'>
				Label</Text>

		</>
	)
}

export default App
