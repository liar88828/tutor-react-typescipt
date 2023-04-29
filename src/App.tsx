
import './style/App.css'
import { ThemeContextProvider } from './components/eps14/context/ThemeContext';
import Box from './components/eps14/context/Box';

function App() {

	return (
		<>
			<ThemeContextProvider>
				<Box />
			</ThemeContextProvider>
		</>
	)
}

export default App
