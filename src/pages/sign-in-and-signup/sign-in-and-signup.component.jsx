import React from 'react';
import PropTypes from 'prop-types';

import './sign-in-and-signup.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';

const SignInAndUpPage = () => {
	return (
		<div>
			<SignIn />
		</div>
	);
};


SignInAndUpPage.propTypes = {
	
};


export default SignInAndUpPage;
