import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss'
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartHidden }) => {
	return (
		<div className="cart-icon" onClick={toggleCartHidden}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">0</span>
		</div>
	);
};


CartIcon.propTypes = {
	
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleCartHidden: () => dispatch(toggleCartHidden())
	}
}

export default connect(null, mapDispatchToProps)(CartIcon);
