import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppRouter from './appRouter';
import SignIn from '../components/SignIn';

const LoginRouter = () => {
	return (
		<>
			<Switch>
				<Route path='/login' component={SignIn} exact />
				<AppRouter />
			</Switch>
		</>
	);
}

export default LoginRouter;
