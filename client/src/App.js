import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
	return (
		<Router>
			<Navbar />
			<div className='App'>
				<Routes>
					<Route />
				</Routes>
			</div>
		</Router>
	)
}

export default App
