import Container from '../Container/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => (
  <nav className={styles.nav}>
    <Container>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo} aria-label="Home">
          <FontAwesomeIcon icon={faTasks} />
        </Link>

        <ul className={styles.menu}>
          <li>
            <NavLink to="/" end className={({isActive}) => isActive ? styles.active : undefined}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorite" className={({isActive}) => isActive ? styles.active : undefined}>
              Favorite
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({isActive}) => isActive ? styles.active : undefined}>
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </Container>
  </nav>
);

export default NavBar;