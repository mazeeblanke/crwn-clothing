import React from 'react';
import PropTypes from 'prop-types';

import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => {
	return (
		<div 
			className={`menu-item ${size}`}
		>
			<div
			  className="background-image"
				style={{
					backgroundImage: `url(${imageUrl})`
				}} 
			/>
			<div className="content">
				<h1 className="title">{title}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};


MenuItem.propTypes = {
	
};


export default MenuItem;
