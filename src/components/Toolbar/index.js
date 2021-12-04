import { Link, NavLink } from "react-router-dom";
import styles from './Toolbar.module.scss';

function Toolbar() {
    return (
        <nav className={styles.toolbar}>
            <Link className={styles.brandLogo} to='/'>Auth App</Link>

            <ul className={styles.toolbarList}>
                <li className={styles.toolbarItem}>
                    <NavLink className={styles.toolbarLink} to='/'>Home</NavLink>
                    <NavLink className={styles.toolbarLink} to='/login'>Login</NavLink>
                    <NavLink className={styles.toolbarLink} to='/register'>Register</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Toolbar;
