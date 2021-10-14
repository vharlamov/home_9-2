import React from 'react'
import { useHistory } from 'react-router'

const UserCard = ({ state }) => {
	const history = useHistory()
	const isEmpty = !Object.keys(state).reduce((acc, field) => {
		acc += state[field].value
		return acc
	}, '')

	const handleEdit = () => {
		history.replace('/form')
	}

	return (
		<div className='container mt-5'>
			<div className='row'>
				<div className='col-md-8 offset-md-3 shadow p-4'>
					<h1>Карточка студента</h1>
					{isEmpty ? (
						<h2>Нет данных</h2>
					) : (
						<>
							<h2>Имя: {state.firstName.value}</h2>
							<h2>Фамилия: {state.lastName.value}</h2>
							<h2>Год рождения: {state.birthYear.value}</h2>
							<h2>Портфолио: {state.portfolio.value}</h2>
						</>
					)}
					<button
						className='btn  btn-primary w-100 mx-auto mt-4'
						onClick={handleEdit}
					>
						{isEmpty ? 'Добавить' : 'Редактировать'}
					</button>
				</div>
			</div>
		</div>
	)
}

export default UserCard
