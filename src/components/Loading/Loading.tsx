import React from 'react';

import LoadingGIF from '../../assets/gif/loading.gif';

import styles from './loading.module.scss';

const Loading: React.FC = () => {
	return (
		<div className={styles.root}>
			<img src={LoadingGIF} alt='Loading...' />
		</div>
	);
};

export default Loading;
