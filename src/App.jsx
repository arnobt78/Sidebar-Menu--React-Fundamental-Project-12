/**
 * Root App component: sets up React Router and global UI (Modal, Sidebar).
 * Layout route wraps all pages so each page gets the same sidebar toggle + content area.
 * Modal and Sidebar are rendered outside Routes so they stay mounted and can be toggled from any page.
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/Home';
import Team from './pages/Team';
import Projects from './pages/Projects';
import Calendar from './pages/Calendar';
import Documents from './pages/Documents';
import Modal from './Modal';
import Sidebar from './Sidebar';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout provides sidebar-toggle button and <Outlet /> for the active route */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/documents" element={<Documents />} />
        </Route>
      </Routes>
      {/* Modal and Sidebar live outside Routes so they persist and read from context */}
      <Modal />
      <Sidebar />
    </BrowserRouter>
  );
};
export default App;
