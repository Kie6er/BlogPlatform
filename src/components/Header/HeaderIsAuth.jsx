import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { logOutUser } from '../../redux/slices/user.slice';

import style from './Header.module.scss';

const HeaderIsAuth = ({ username, image }) => {
	const dispatch = useDispatch();

	const handleLogOut = () => {
		dispatch(logOutUser());

		const savedUser = JSON.parse(localStorage.getItem('user'));
		if (Object.keys(savedUser).length !== 0) {
			localStorage.setItem('user', JSON.stringify({}));
		}
	};

	return (
		<div className={style['header__auth']}>
			<Link to='/new-article' className='create-article-btn'>
				Create article
			</Link>
			<Link to='/profile' className={style['header__author']}>
				<p>{username}</p>
				<div className={style['header__author-img']}>
					<img src={image || 'img/photo.jpg'} alt='' />
				</div>
			</Link>
			<button className='log-out-btn' onClick={handleLogOut}>
				Log out
			</button>
		</div>
	);
};

export default HeaderIsAuth;
