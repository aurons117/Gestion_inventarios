import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App2 from './components/App';

render((
	<Router>
		<App2 />
	</Router>
), document.getElementById('root'));
