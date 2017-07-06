import React,{ Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import  { Link } from 'react-router-dom'
import { createPost } from '../../actions'

class PostNew extends Component {
	renderField(field) {
		const { input, label } = field
		return(
			<div>
				<label>{label}</label>
				<input
					type="text"
					{...input}
				/>
			</div>
		)
	}

	onSubmit(values) {
		this.props.createPost(values)
	}

	render() {
		const { handleSubmit } = this.props
		return(
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
					label="Title"
					name="title"
					component={this.renderField}
				/>
				<Field
					label="Message"
					name="message"
					component={this.renderField}
				/>
				<button type="submit">submit</button>
			</form>
		)
	}	
}

function validate(value){
	const error = {}
	return error
}

export default reduxForm({
	validate,
	form:"PostNewForm"
})(
	connect(null, { createPost })(PostNew)
)

