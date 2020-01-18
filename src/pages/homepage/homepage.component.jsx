import React from 'react';
import PropTypes from 'prop-types';
import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss'

const HomePage = () => {
	return (
		<div className="homepage">
			<Directory />
		</div>
	);
};


HomePage.propTypes = {
	
};


export default HomePage;
