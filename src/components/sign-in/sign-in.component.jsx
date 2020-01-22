import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss'

class SignIn extends Component {
	state = {
		email: '',
		password: ''
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			email: '',
			password: ''
		})
	}

	handleChange = (e) => {
		const { name, value } = e.target
		this.setState({
			[name]: value
		})
	}

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput 
						type="email" 
						name="email" 
						label="Email"
						handleChange={this.handleChange}
						required 
						value={this.state.email} 
					/>

					<FormInput 
						type="password" 
						name="password" 
						label="password"
						required 
						handleChange={this.handleChange}
						value={this.state.password} 
					/>
					<div className="buttons">
						<CustomButton type="submit">
							Sign in
						</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign in with google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}


SignIn.propTypes = {
	
};


export default SignIn;
