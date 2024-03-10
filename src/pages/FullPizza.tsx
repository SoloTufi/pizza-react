import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Link, useNavigate, useParams } from 'react-router-dom'

const FullPizza: React.FC = () => {
	const [pizza, setPizza] = useState<{
		imageUrl: string
		title: string
		price: number
	}>()

	const { id } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		const fetchPizza = async () => {
			try {
				const { data } = await axios.get(
					'https://65e74e9e53d564627a8e7a59.mockapi.io/items/' + id
				)
				setPizza(data)
			} catch (error) {
				alert('Ошибка при получении пиццы!')
				navigate('/')
			}
		}

		fetchPizza()
	}, [])

	if (!pizza) {
		return <>Загрузка...</>
	}

	return (
		<div className='container'>
			<img src={pizza.imageUrl} />
			<h2>{pizza.title}</h2>
			<h4>{pizza.price} ₽</h4>
		</div>
	)
}

export default FullPizza
