import React from 'react';
import PropTypes from 'prop-types';

import './sign-in-and-signup.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-signup.styles.scss'

const SignInAndUpPage = () => {
	return (
		<div className="sign-in-and-sign-up">
			<SignIn />
			<SignUp />
		</div>
	);
};


SignInAndUpPage.propTypes = {
	
};


export default SignInAndUpPage;
