import { React, useEffect } from 'react';
import './App.scss';
import Background from './components/Background';

const App = (context) => {
	useEffect(() => context.actions.addSquare(context), []);

	return <div className="App" role="App">
		<Background { ...context }/>
	</div>;
};

export default App;
