import { Link, NavLink, useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { logoutAction } from "../../store/actionCreators";
import styles from './Toolbar.module.scss';

function Toolbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    const isAuthenticated = !!user;

    const logout = () => {
        console.log('LOGOUT');
        dispatch(logoutAction());
        navigate('/login');
    }

    return (
        <nav className={styles.toolbar}>
            <Link className={styles.brandLogo} to='/'>Auth App</Link>

            <ul className={styles.toolbarList}>
                <li className={styles.toolbarItem}>
                    <NavLink className={styles.toolbarLink} to='/'>Home</NavLink>
                    {
                        !isAuthenticated ?
                        <>
                            <NavLink className={styles.toolbarLink} to='/login'>Login</NavLink>
                            <NavLink className={styles.toolbarLink} to='/register'>Register</NavLink>
                        </> :
                        <>
                            <NavLink className={styles.toolbarLink} to='/'>Hello, {user.username}</NavLink>
                            <a href='#' className={styles.toolbarLink} onClick={logout}>
                                Logout
                            </a>
                        </>
                    }
                </li>
            </ul>
        </nav>
    )
}

export default Toolbar;
