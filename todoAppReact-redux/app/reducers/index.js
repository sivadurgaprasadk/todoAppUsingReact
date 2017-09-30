import React from 'react';
import {combineReducers} from 'redux';
import todos from './todos';
import setVisibility from './setVisibility';

const todoApp = combineReducers(
	{todos,
	setVisibility}
	);

export default todoApp;