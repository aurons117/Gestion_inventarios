import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import HeaderInfo from './Header';
import Home from './Home';
import NotFound from './NotFound';
import '../styles/index.css';
import PrivateRoute from './PrivateRoute';
// import SignIn from './SignIn';
import Login from './Login';

const App = () => {
	return (
		<>
			<Nav />
			<HeaderInfo />
			<div className='content'>
				<Switch>
					<Route path='/login' component={Login} exact />
					<PrivateRoute path='/' component={Home} exact />
					<PrivateRoute path='*' component={NotFound} />
				</Switch>
			</div>
		</>
	);
}

export default App;
