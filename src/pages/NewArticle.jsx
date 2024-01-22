import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import ArticleForm from '../components/Forms/ArticleForm';

const NewArticle = () => {
	const { isAuth } = useSelector(state => state.user);

	const savedUser = JSON.parse(localStorage.getItem('user'));
	if (Object.keys(savedUser).length === 0 || !isAuth) {
		return <Navigate to='/sign-in' replace />;
	}

	return <ArticleForm title='Create new article' />;
};

export default NewArticle;
