import { useHistory } from 'react-router'
import TextField from '../components/textField'
import PropTypes from 'prop-types'

const Form = ({ inputs, onChange, isError, errors }) => {
	const history = useHistory()

	const handleUpdate = (e) => {
		e.preventDefault()
		history.replace('/')
	}

	return (
		<div className='container mt-5'>
			<div className='row'>
				<div className='col-md-6 offset-md-3 shadow p-4'>
					<h1>Создать</h1>
					<form onSubmit={handleUpdate} className='row g-3 needs-validation'>
						{Object.keys(inputs).map((key) => {
							const name = key
							const label = inputs[key].label
							const value = inputs[key].value

							return (
								<TextField
									key={name}
									name={name}
									label={label}
									value={value}
									onChange={onChange}
									error={errors[name]}
								/>
							)
						})}
						<button
							className='btn  btn-primary w-100 mx-auto'
							disabled={isError}
						>
							Обновить
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

Form.propTypes = {
	inputs: PropTypes.object,
	onChange: PropTypes.func,
	isError: PropTypes.bool,
	errors: PropTypes.object,
}

export default Form
