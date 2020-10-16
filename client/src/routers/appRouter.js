import React from 'react';
import { Switch } from 'react-router-dom';
import Nav from '../components/Nav';
import HeaderInfo from '../components/Header';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import PrivateRoute from '../components/PrivateRoute';
import Clients from '../components/Clients';
import Sales from '../components/Sales';
import Suppliers from '../components/Suppliers';

const AppRouter = () => {
	return (
		<>
			<Nav />
			<div className="right_content">
				<HeaderInfo />
				<div className="app_content">
					<Switch>
						<PrivateRoute path='/' component={Home} exact />
						<PrivateRoute path='/sales' component={Sales} />
						<PrivateRoute path='/clients' component={Clients} />
						<PrivateRoute path='/suppliers' component={Suppliers} />
						<PrivateRoute path='*' component={NotFound} />
					</Switch>
				</div>
			</div>
		</>
	);
}

export default AppRouter;
