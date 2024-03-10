import React from 'react';

import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

import Loading from '../../components/Loading/Loading';

import style from './fullpizza.module.scss';

const FullPizza: React.FC = () => {
	const [pizza, setPizza] = React.useState<{
		imageUrl: string;
		title: string;
		introduction: string;
		price: number;
	}>();

	const { id } = useParams();
	const navigate = useNavigate();

	React.useEffect(() => {
		const fetchPizza = async () => {
			try {
				const { data } = await axios.get(
					'https://65e74e9e53d564627a8e7a59.mockapi.io/items/' + id,
				);
				setPizza(data);
			} catch (error) {
				alert('Ошибка при получении пиццы!');
				navigate('/');
			}
		};

		fetchPizza();
	}, []);

	if (!pizza) {
		return <Loading />;
	}

	return (
		<div className='container'>
			<div className={style.root}>
				<div className={style.flex}>
					<div className={style.img}>
						<img src={pizza.imageUrl} alt='pizza' />
					</div>
					<div className={style.text}>
						<h2>{pizza.title}</h2>
						<p>{pizza.introduction}</p>
					</div>
				</div>
				<div className={style.price}>
					<p>Стоимость: {pizza.price}₽</p>
					<Link to={'/'} className='button button--outline button--add'>
						На главную
					</Link>
				</div>
			</div>
		</div>
	);
};

export default FullPizza;
