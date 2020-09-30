import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginRouter from './routers/loginRouter';
// import './styles/index.css';
import './styles/styles.scss';

render((
	<Router>
		<LoginRouter />
	</Router>
), document.getElementById('root'));
