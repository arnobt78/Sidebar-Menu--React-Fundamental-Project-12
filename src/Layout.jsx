import { Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Layout = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <>
      <button onClick={openSidebar} className="sidebar-toggle" type="button">
        <FaBars />
      </button>
      <Outlet />
    </>
  );
};
export default Layout;
