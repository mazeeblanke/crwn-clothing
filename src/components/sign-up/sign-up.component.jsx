import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './sign-up.styles.scss'

class SignUp extends Component {

	state = {
		displayName : '',
		email: '',
		password: '',
		confirmPassword: ''
	}

	handleChange = (e) => {
		const { name, value } = e.target
		this.setState({
			[name]: value
		})
	}

	handleSubmit = async (event) => {
		event.preventDefault()

		const {
			email,
			password,
			displayName,
			confirmPassword
		} = this.state

		if (password !== confirmPassword) {
			alert("Passwords don't match")
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password)

			await createUserProfileDocument(user, { displayName })
			this.setState({
				displayName : '',
				email: '',
				password: '',
				confirmPassword: ''
			})
		} catch (error) {
			console.log(error)
		}
	}

	render () {
		const {
			email,
			password,
			displayName,
			confirmPassword
		} = this.state
		return (
			<div className="sign-up">
				<h2>I do not have an account</h2>
				<span>Sign up with an email and passord</span>
				<form onSubmit={this.handleSubmit} className="sign-up-form">
					<FormInput
					  type="text"
						name="displayName"
						label="displayName"
						value={displayName}
						handleChange={this.handleChange}
					/>
					<FormInput
					  type="email"
						name="email"
						label="email"
						value={email}
						handleChange={this.handleChange}
					/>
					<FormInput
					  type="password"
						name="password"
						label="password"
						value={password}
						handleChange={this.handleChange}
					/>
					<FormInput
					  type="password"
						name="confirmPassword"
						label="confirmPassword"
						value={confirmPassword}
						handleChange={this.handleChange}
					/>
					<CustomButton type="submit">
						SIGN UP
					</CustomButton>
				</form>
			</div>
		);
	}
};


SignUp.propTypes = {
	
};


export default SignUp;
