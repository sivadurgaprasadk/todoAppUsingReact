import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import App from './components/App';
import todoApp from './reducers';
import {loadStorage,saveStorage} from './localstorage/localStorageApi';

const getLocalStorredState = loadStorage();
const store = createStore(todoApp,getLocalStorredState);

store.subscribe(()=>{
	saveStorage({
		todos: store.getState().todos
	})
});

ReactDom.render(
	<Provider store = {store} >
		<App/>
	</Provider>,document.getElementById('app')
);