import React from 'react'

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

export default TextField
