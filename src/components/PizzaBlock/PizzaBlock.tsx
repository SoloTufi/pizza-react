import React from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/cart/slice';
import { CartItem } from '../../redux/cart/types';
import { selectPizzaData } from '../../redux/pizzas/selectors';

const typeNames = ['тонкое', 'традиционное'];

type PizzaBlockProps = {
	id: string;
	image: string;
	title: string;
	price: number;
	sizes: number[];
	types: number[];
	rating: number;
};

const PizzaBlock: React.FC<PizzaBlockProps> = ({ id, image, title, price, sizes, types }) => {
	const { items } = useSelector(selectPizzaData);
	const dispatch = useDispatch();
	const [activeType, setActiveType] = React.useState(0);
	const [activeSize, setActiveSize] = React.useState(0);

	const onClickAdd = () => {
		const dynamicId = `${id}${typeNames[activeType]}${sizes[activeSize]}`;
		const item: CartItem = {
			id: dynamicId,
			title,
			price,
			image,
			type: typeNames[activeType],
			size: sizes[activeSize],
			count: 0,
		};
		dispatch(addItem(item));
	};

	const selectType = types.map((type, id) => (
		<li
			key={id}
			onClick={() => setActiveType(type)}
			className={activeType === type ? 'active' : ''}
		>
			{typeNames[type]}
		</li>
	));

	const selectSize = sizes.map((size, id) => (
		<li
			key={id}
			onClick={() => setActiveSize(id)}
			className={activeSize === id ? 'active' : ''}
		>
			{size} см.
		</li>
	));

	return (
		<div className='pizza-block-wrapper'>
			<div className='pizza-block'>
				<Link key={id} to={`pizza/${id}`}>
					<img className='pizza-block__image' src={image} alt='Pizza' />
					<h4 className='pizza-block__title'>{title}</h4>
				</Link>
				<div className='pizza-block__selector'>
					<ul>{selectType}</ul>
					<ul>{selectSize}</ul>
				</div>
				<div className='pizza-block__bottom'>
					<div className='pizza-block__price'>{price} ₽</div>
					<button onClick={onClickAdd} className='button button--outline button--add'>
						<svg
							width='12'
							height='12'
							viewBox='0 0 12 12'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
								fill='white'
							/>
						</svg>
						<span>Добавить</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default PizzaBlock;
