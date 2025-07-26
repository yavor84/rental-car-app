import { Link } from 'react-router-dom';
import sprite from '../../assets/icon/sprite.svg';
import Navigation from '../Navigation/Navigation.jsx';

function AppBar() {
  return (
    <div>
      <header>
        <Link to="/">
          <svg>
            <use href={`${sprite}#icon-logo`} />
          </svg>
        </Link>
        <Navigation />
      </header>
    </div>
  );
}

export default AppBar;
