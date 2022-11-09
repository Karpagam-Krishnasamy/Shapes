import { React } from 'react';
import './App.scss';
import Background from './components/Background';

const App = (context) => <div className="App" role="App">
	<Background { ...context }/>
</div>;

export default App;
