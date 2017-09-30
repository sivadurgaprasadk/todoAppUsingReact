import React ,{PropTypes} from 'react';
import Todo from './Todo';

const TodoList = ({todos,onTodoClick})=>{
	return(
		<ul className="text-center" style={{listStyleType:'none'}}>
			{todos.map(todo =>
				<Todo key={todo.id} {...todo} onClick={()=>onTodoClick(todo.id)}/> )
			}
		</ul>
	);
};

TodoList.propTypes ={
	todos : PropTypes.arrayOf(PropTypes.shape({
		id:PropTypes.string.isRequired,
		text:PropTypes.string.isRequired,
		completed : PropTypes.bool.isRequired,
	}).isRequired).isRequired,
	onTodoClick :PropTypes.func.isRequired
};

export default TodoList;
