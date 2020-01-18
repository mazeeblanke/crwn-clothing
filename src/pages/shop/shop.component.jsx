import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SHOP_DATA } from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';


class Shop extends Component {
	constructor (props) {
		super(props)
		this.state = {
			collections: SHOP_DATA
		}
	}
	render() {
		const { collections } = this.state
		return (
			<div className="shop-page">
				{
					collections.map(({ id, ...otherCollectionProps }) => (
						<CollectionPreview { ...otherCollectionProps } />
					))
				}
			</div>
		);
	}
}


Shop.propTypes = {
	
};


export default Shop;
