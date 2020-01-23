import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss'
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => {
	return (
		<div className="header">
			<Link to="/" className="logo-container">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link to="/shop" className="option">
					SHOP
				</Link>
				<Link to="/contact" className="option">
					CONTACT
				</Link>
				{
					currentUser 
						? <div className="option" onClick={() => auth.signOut() }>
								SIGN OUT
							</div>
						: <Link className="option" to="/signin">
								SIGN IN
							</Link>
				}
				<CartIcon />
			</div>
			{
				!hidden 
					? <CartDropdown />
					: null
			}
		</div>
	);
};


Header.propTypes = {
	
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden }}) => {
	return {
		currentUser,
		hidden
	}
}

export default connect(mapStateToProps)(Header);
