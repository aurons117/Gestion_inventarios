import React from 'react';
import { Switch } from 'react-router-dom';
import Nav from '../components/Nav';
import HeaderInfo from '../components/Header';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import PrivateRoute from '../components/PrivateRoute';
import Clients from '../components/Clients';

const AppRouter = () => {
	return (
		<>
			<Nav />
			<HeaderInfo />
			<div className='content'>
				<Switch>
					<PrivateRoute path='/' component={Home} exact />
					<PrivateRoute path='/clients' component={Clients} />
					{/* <PrivateRoute path='/suppliers' render={() => <h1>Hola mundo</h1>} exact /> */}
					<PrivateRoute path='*' component={NotFound} />
				</Switch>
			</div>
		</>
	);
}

export default AppRouter;
