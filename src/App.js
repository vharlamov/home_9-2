import React, { useEffect, useState } from 'react'
import { Route } from 'react-router'
import Form from './pages/form'
import UserCard from './pages/userCard'
import validator from './utils/validator'

function App() {
	const initialState = {
		firstName: { label: 'Имя', value: '' },
		lastName: { label: 'Фамилия', value: '' },
		birthYear: { label: 'Год рождения', value: '' },
		portfolio: { label: 'Портфолио', value: '' },
	}

	const [errors, setErrors] = useState({})
	const [state, setState] = useState(initialState)
	const isError = Object.keys(errors).length

	const validatorConfig = {
		firstName: {
			required: {
				message: 'Поле должно быть заполнено',
			},
			isString: {
				message: 'Значение должно содержать только буквы',
			},
		},
		lastName: {
			required: {
				message: 'Поле должно быть заполнено',
			},
			isString: {
				message: 'Значение должно содержать только буквы',
			},
		},
		birthYear: {
			required: {
				message: 'Поле должно быть заполнено',
			},
			length: {
				message: 'Введите год правильно: YYYY',
			},
			isNum: {
				message: 'Значение должно быть числом',
			},
			isCorrect: {
				message: 'Введите правильный год вашего рождения',
			},
		},
		portfolio: {
			required: {
				message: 'Поле должно быть заполнено',
			},
			isUrl: {
				message: 'Значение должно содержать URL: http<s>://name.domen/...',
			},
		},
	}

	const validate = () => {
		const errors = validator(state, validatorConfig)
		setErrors(errors)
	}

	const handleInput = ({ target }) => {
		setState((prevState) => ({
			...prevState,
			[target.name]: {
				label: prevState[[target.name]].label,
				value: target.value,
			},
		}))
	}

	useEffect(() => {
		validate()
	}, [state])

	return (
		<div className='App'>
			<Route
				path='/form'
				render={() => (
					<Form
						inputs={state}
						onChange={handleInput}
						isError={isError}
						errors={errors}
					/>
				)}
			/>
			<Route path='/' exact render={() => <UserCard state={state} />} />
		</div>
	)
}

export default App
