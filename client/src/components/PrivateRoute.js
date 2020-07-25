import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const [loading, setLoading] = useState(true);
	const [auth, setAuth] = useState(false);

	useEffect(() => {
		async function testing() {
			const result = await isLogin();
			setAuth(result);
			setLoading(false);
		}
		testing();
	}, []);

	if (loading) {
		return <h1>Loading</h1>;
	} else {
		return (
			<Route {...rest} render={props => (
				auth ?
					<Component {...props} />
					: <Redirect to="/login" />
			)} />
		);
	}
};

export default PrivateRoute;
