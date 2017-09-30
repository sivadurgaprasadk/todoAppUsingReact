import React,{ PropTypes } from 'react';

const Filter =({active,OnFilterClick,children}) =>{

	if(active){
			return(<span>{children}</span>);
		}
	return(
		<a href="#" onClick={(e)=>{e.preventDefault();
			OnFilterClick();
		}} >
		{children}
		</a>
	);
};

Filter.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  OnFilterClick: PropTypes.func.isRequired,
};
export default Filter;