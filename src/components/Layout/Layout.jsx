import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar.jsx';

function Layout() {
  return (
    <div>
      <AppBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
