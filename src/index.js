import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import Store from './Store';

import './static/css/main.css';
import './static/css/reset.css';

/* 

//Testing fetch

import Zid from './api/Zid';

Zid.get().then(res => console.log(res)); 

*/

ReactDOM.render(
	<Provider store={Store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
