import { React, useEffect } from 'react';
import './App.scss';
import Background from './components/Background';
import Ticker from './services/Ticker';

const App = (context) => {
	useEffect(() => Ticker.start(context), []);

	return <div className="App" role="App">
		<Background { ...context }/>
	</div>;
};

export default App;
