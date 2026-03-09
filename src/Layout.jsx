/**
 * Shared layout for all routes: sidebar toggle + slot for current page.
 * Outlet renders the matched child route (Home, Team, Projects, etc.).
 */
import { Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Layout = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <>
      {/* Fixed-position hamburger; opening sidebar is global so any page can do it */}
      <button onClick={openSidebar} className="sidebar-toggle" type="button">
        <FaBars />
      </button>
      {/* Active route component renders here (e.g. HomePage, Team, ...) */}
      <Outlet />
    </>
  );
};
export default Layout;
