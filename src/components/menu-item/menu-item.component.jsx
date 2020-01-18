import React from 'react';
import PropTypes from 'prop-types';

import './menu-item.styles.scss'
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
	return (
		<div 
			className={`menu-item ${size}`}
			onClick={() => history.push(`${match.url}${linkUrl}`)}
		>
			<div
			  className="background-image"
				style={{
					backgroundImage: `url(${imageUrl})`
				}} 
			/>
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};


MenuItem.propTypes = {
	
};


export default withRouter(MenuItem);
