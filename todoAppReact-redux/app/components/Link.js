import React from 'react';
import {filterTodo} from '../actions';
import {connect} from 'react-redux';
import  Filter from './Filter';

const mapDispatchToProps = (dispatch,ownProps)=>{
	return{
		OnFilterClick :() => dispatch(filterTodo(ownProps.filter)),
	};
}
const mapStateToProps = (state,ownProps)=>{
	return {
		active: ownProps.filter === state.setVisibility,
	};
}
const Link = connect(mapStateToProps,mapDispatchToProps)(Filter);
export default Link;