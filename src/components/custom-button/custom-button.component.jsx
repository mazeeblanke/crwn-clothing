import React from 'react';
import PropTypes from 'prop-types';

import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSignIn, inverted,  ...otherProps}) => {
	return (
		<button 
			className={`
				${inverted ? 'inverted' : '' } 
				${isGoogleSignIn ? 'google-sign-in' : '' } 
				custom-button`} {...otherProps}
			>
			{ children }
		</button>
	);
};


CustomButton.propTypes = {
	
};


export default CustomButton;
