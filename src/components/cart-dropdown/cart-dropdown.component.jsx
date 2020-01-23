import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items"></div>
			<CustomButton >GO TO CHECKOUT</CustomButton>
		</div>
	);
};


CartDropdown.propTypes = {
	
};


export default CartDropdown;
