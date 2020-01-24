import React from 'react';
import PropTypes from 'prop-types';

import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
	const {
		imageUrl,
		name,
		price
	} = item
	return (
		<div className="collection-item">
			<div 
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
			></div>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<CustomButton inverted onClick={() => addItem(item)}>
				ADD TO CART
			</CustomButton>
		</div>
	);
};


CollectionItem.propTypes = {
	
};

const mapDispatchToProps = (dispatch) => {
	return {
		addItem: (item) => dispatch(addItemToCart(item))
	}
}

export default connect(null, mapDispatchToProps)(CollectionItem);
