import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import HeaderInfo from './Header';
import Home from './Home';
import NotFound from './NotFound';
import '../styles/index.css';
import PrivateRoute from './PrivateRoute';
import SignIn from './SignIn';

const App2 = () => {
	return (
		<>
			<Switch>
				<Route path='/login' component={SignIn} exact />
				<App />
			</Switch>
		</>
	);
}

const App = () => {
	return (
		<>
			<Nav />
			<HeaderInfo />
			<div className='content'>
				<Switch>
					<PrivateRoute path='/' component={Home} exact />
					<PrivateRoute path='*' component={NotFound} />
				</Switch>
			</div>
		</>
	);
}

export default App2;
