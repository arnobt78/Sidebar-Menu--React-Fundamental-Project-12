/**
 * Sidebar: nav links (in-app via React Router Link) and social links (external, new tab).
 * Data comes from data.jsx; show-sidebar class controls visibility via CSS.
 */
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import { social, links } from './data';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className="sidebar-header">
        <img src={logo} alt="coding addict" className="logo" />
        <button className="close-btn" onClick={closeSidebar} type="button">
          <FaTimes />
        </button>
      </div>
      {/* In-app navigation: Link avoids full reload; closeSidebar for better UX */}
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <Link to={url} onClick={closeSidebar}>
                {icon}
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* External links: open in new tab; rel="noopener noreferrer" for security */}
      <ul className="social-links">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;
