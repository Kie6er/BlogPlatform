import { useSelector } from 'react-redux';

import Verify from '../../ui/Verify';
import Article from '../Article';

import styles from './ArticleList.module.scss';

const ArticleList = () => {
	const { items } = useSelector(state => state.articlesList);
	const { status, errors } = useSelector(state => state.server);

	const articles = items.map((el, id) => <Article key={`${id}__${el.slug}`} {...el} />);

	return (
		<Verify status={status} errors={errors}>
			<ul className={styles['article-list']}>{articles}</ul>
		</Verify>
	);
};

export default ArticleList;
