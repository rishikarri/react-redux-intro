// containers are just regular reaact components with access to redux

import React, { Component } from 'react';
import { connect } from 'react-redux';


// trigger an action through every single reducer
import { bindActionCreators } from 'redux'

class StudentList extends Component{

	render(){
		var studentArray = []; 
		this.props.students.map((student, index)=>{
			studentArray.push(
				<li key={index}> {student.name} </li>
			)
			
		})
		return(
			<div>
				{studentArray}
			</div>
		)

	}
}



function mapStateToProps(state){

	return {
		students: state.students
	}
}

//need to actually give this section access to state by connecting it to the store

var aComponentWithAccessToState = connect(mapStateToProps)(StudentList); 

export default aComponentWithAccessToState;