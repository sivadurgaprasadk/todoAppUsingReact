import React from 'react';
import Addtodo from './Addtodo';
import VisibleTodoList from './VisibleTodoList';
import Footer from './Footer';

const App =()=>{
	return(
		<div>
			<Addtodo />
			<VisibleTodoList />
			<Footer />
		</div>
	)
}
export default App;