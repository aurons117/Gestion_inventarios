import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';

const App = () => {
	return (
		<>
			<Nav />
			<Switch>
				<Route path='/' component={Home} exact />
				<Route path='/login' component={Login} exact />
				<Route path='*' component={NotFound} />
			</Switch>
		</>
	);
};

export default App;
