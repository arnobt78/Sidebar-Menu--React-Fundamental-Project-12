/**
 * Global UI state for sidebar and modal.
 * AppProvider holds the state and passes it (and handlers) down via context.
 * Any component can open/close sidebar or modal by using useGlobalContext().
 */
import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

/** Custom hook: use this in any component to read/update sidebar and modal state. */
export const useGlobalContext = () => {
  return useContext(AppContext);
};
