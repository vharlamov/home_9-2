import React from 'react'
import PropTypes from 'prop-types'

const TextField = ({ name, label, value, onChange, error }) => {
	const getInputClasses = () => {
		return 'form-control' + (error ? ' is-invalid' : '')
	}

	return (
		<div className='mb-4'>
			<label htmlFor={name}>{label}</label>
			<div className='input-group'>
				<input
					type='text'
					id={name}
					name={name}
					value={value}
					onChange={onChange}
					className={getInputClasses()}
				/>

				<div className='invalid-feedback'>{error ? error : ' '}</div>
			</div>
		</div>
	)
}

TextField.propTypes = {
	name: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	error: PropTypes.string,
}

export default TextField
