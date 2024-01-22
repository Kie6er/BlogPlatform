import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ArticleForm from '../components/Forms/ArticleForm';

const EditArticle = () => {
	const { isAuth } = useSelector(state => state.user);

	const savedUser = JSON.parse(localStorage.getItem('user'));
	if (Object.keys(savedUser).length === 0 || !isAuth) {
		return <Navigate to='/sign-in' replace />;
	}

	return <ArticleForm title='Edit article' />;
};

export default EditArticle;
