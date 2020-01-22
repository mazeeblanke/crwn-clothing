import React from 'react';
import PropTypes from 'prop-types';

import './form-input.styles.scss'

const FormInput = ({ handleChange, label, ...otherProps }) => {
	return (
		<div className="group">
			<input 
				className="form-input" 
				onChange={handleChange} 
				{ ...otherProps }
			/>
			{
				label 
					?
						<label 
							className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
							{label}
						</label>
				  : null 		
			}
		</div>
	);
};


FormInput.propTypes = {
	
};


export default FormInput;
