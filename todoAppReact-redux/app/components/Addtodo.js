import React , {PropTypes} from 'react';
import {connect} from 'react-redux';
import {addingTodo} from'../actions';

const AddTodo = ({ dispatch })=>{
	let input;
	return(
		<div className="text-center">
		<form onSubmit={e =>
		{	e.preventDefault();
			if(!input.value.trim()){
				return;
			}
			dispatch(addingTodo(input.value));
			input.value = ' ';
		} }>
			<input type = 'text' ref={node=>{input = node }}/>
			<button type='submit'>Add Todo</button>
		</form>
		</div>
	);
};

AddTodo.proptypes = {
	dispatch:PropTypes.func.isRequired
};

export default connect()(AddTodo);