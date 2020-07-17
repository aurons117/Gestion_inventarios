import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import HeaderInfo from './Header';
import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';
import '../styles/index.css';

const App = () => {
	return (
		<>
			<Nav />
			<HeaderInfo />
			<div className='content'>
				<Switch>
					<Route path='/' component={Home} exact />
					<Route path='/login' component={Login} exact />
					<Route path='*' component={NotFound} />
				</Switch>
			</div>
		</>
	);
};

export default App;
