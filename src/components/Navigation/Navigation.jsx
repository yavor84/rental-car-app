import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

function Navigation() {
  return (
    <div>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${css.link} ${isActive ? css.active : ''}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) =>
            `${css.link} ${isActive ? css.active : ''}`
          }
        >
          Catalog
        </NavLink>
      </nav>
    </div>
  );
}

export default Navigation;
