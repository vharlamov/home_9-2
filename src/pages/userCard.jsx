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
						<h3>Нет данных</h3>
					) : (
						<>
							{Object.keys(state).map((field) => (
								<h3 key={field}>
									{state[field].label}: {state[field].value}
								</h3>
							))}
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
