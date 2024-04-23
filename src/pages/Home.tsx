import React from 'react';

import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../redux/store';
import { selectPizzaData } from '../redux/pizzas/selectors';
import { selectFilter } from '../redux/filter/selectors';
import { SearchPizzaParams } from '../redux/pizzas/types';
import { setCategoryId, setCurrentPage, setFilters } from '../redux/filter/slice';
import { fetchPizzas } from '../redux/pizzas/asyncActions';

import Categories from '../components/Categories';
import SortPopup, { sortList } from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Pagination from '../components/Pagination/Pagination';
import { Skeleton } from '../components/PizzaBlock/Skeleton';

const Home: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const isMounted = React.useRef(false);

	const { items, status } = useSelector(selectPizzaData);
	const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);

	const getPizzas = async () => {
		const category = categoryId > 0 ? `category=${categoryId}` : '';
		const sortBy = sort.sortProperty.replace('-', '');
		const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
		const search = searchValue ? `search=${searchValue}` : '';

		dispatch(
			fetchPizzas({
				category,
				sortBy,
				order,
				search,
				currentPage: String(currentPage),
			}),
		);
		//Displaying the page from the top when navigating to it
		window.scrollTo(0, 0);
	};

<<<<<<< HEAD
  //Если был первый рендер, то проверяем URL-параметры и сохраняем в Redux
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(
        window.location.search.substring(1)
      ) as unknown as SearchPizzaParams;
      const sort = sortList.find((obj) => obj.sortProperty === params.sortBy);
      dispatch(
        setFilters({
          searchValue: params.search,
          categoryId: Number(params.category),
          currentPage: Number(params.currentPage),
          sort: sort || sortList[0],
        })
      );
    }
  }, []);
=======
	//Если был первый рендер, то проверяем URL-параметры и сохраняем в Redux
	React.useEffect(() => {
		if (window.location.search) {
			const params = qs.parse(
				window.location.search.substring(1),
			) as unknown as SearchPizzaParams;
			const sort = sortList.find(obj => obj.sortProperty === params.sortBy);
			dispatch(
				setFilters({
					searchValue: params.search,
					categoryId: Number(params.category),
					currentPage: Number(params.currentPage),
					sort: sort || sortList[0],
				}),
			);
		}
	}, []);
>>>>>>> 74218b69c6c4024c0d0d207502bea1267296419a

	//Если был первый рендер, то запрашиваем пиццы
	React.useEffect(() => {
		getPizzas();
	}, [categoryId, sort.sortProperty, currentPage, searchValue]);

<<<<<<< HEAD
  //Если изменили параметры и был первй рендер, то в этом случае будет проверка
  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, currentPage]);
=======
	//Если изменили параметры и был первй рендер, то в этом случае будет проверка
	React.useEffect(() => {
		if (isMounted.current) {
			const queryString = qs.stringify({
				sortProperty: sort.sortProperty,
				categoryId,
				currentPage,
			});

			navigate(`?${queryString}`);
		}
		isMounted.current = true;
	}, [categoryId, sort.sortProperty, currentPage]);
>>>>>>> 74218b69c6c4024c0d0d207502bea1267296419a

	const onChangeCategory = React.useCallback((idx: number) => {
		dispatch(setCategoryId(idx));
	}, []);

	const onChangePage = (page: number) => {
		dispatch(setCurrentPage(page));
	};

	const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />);

	const pizzas = items.map((obj: any) => (
		<PizzaBlock key={obj.id} image={obj.imageUrl} {...obj} />
	));

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories value={categoryId} onChangeCategory={onChangeCategory} />
				<SortPopup value={sort} />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			{status === 'error' ? (
				<div className='content__error-info'>
					<h2>Произошла ошибка 😕</h2>
					<p>Не удалось получить пиццы. Попробуйте повторить попытку позже.</p>
				</div>
			) : (
				<div className='content__items'>{status === 'loading' ? skeletons : pizzas}</div>
			)}

			<Pagination currentPage={currentPage} onChangePage={onChangePage} />
		</div>
	);
};

export default Home;
