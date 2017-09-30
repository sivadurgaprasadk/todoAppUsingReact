import React, {PropTypes} from 'react';
const Todo = ({onClick, completed, text,id}) => {
		return (
				<li className="text-center" onClick={onClick} style={{textDecoration: completed ? 'line-through' : 'none',}} >
					{text}
    			</li>
    	);
    	
    	
};
export default Todo;