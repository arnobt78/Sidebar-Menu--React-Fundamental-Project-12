# Sidebar Menu Router - React, Vite, JavaScript, Context API, Custom CSS Fundamental Project 12

- **Live Demo:** []()

---

## Table of Contents

- [Project Summary](#project-summary)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [How It Works](#how-it-works)
- [Getting Started](#getting-started)
- [Component Walkthrough](#component-walkthrough)
- [Global State and Context](#global-state-and-context)
- [Data Structure](#data-structure)
- [Styling](#styling)
- [Learning Outcomes](#learning-outcomes)
- [Keywords](#keywords)
- [Example Code](#example-code)
- [Conclusion](#conclusion)

---

## Project Summary

This project is a simple but robust React application that demonstrates how to use React's Context API to control a sidebar and a modal globally. The user can open and close these UI elements from anywhere in the app, making this a practical pattern for modern web apps. All state logic is abstracted into a global context provider with custom hooks, and the UI is built using reusable, functional components.

---

## Features

- **Sidebar Navigation:** Open/close a sidebar with navigation links and social icons.
- **Modal Window:** Open/close a modal dialog globally.
- **Global State Management:** Uses React Context API and custom hooks.
- **Reusable Components:** Home, Sidebar, Modal.
- **Data-driven UI:** Navigation and social links are generated from data structures.
- **Responsive & Animated UI:** Sidebar and modal are styled with CSS transitions and keyframes.
- **Educational Structure:** All patterns and code are easy to follow for learners.

---

## Project Structure

```
.
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── Home.jsx
│   ├── Sidebar.jsx
│   ├── Modal.jsx
│   ├── context.jsx
│   ├── data.jsx
│   ├── index.css
│   ├── logo.svg
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

- **/src**: Contains all React source files.
- **public/**: Static/public assets.
- **index.html**: Root HTML template.
- **package.json**: Project metadata and dependencies.
- **vite.config.js**: Vite bundler configuration.

---

## Technology Stack

- **React** (with hooks)
- **Context API** for global state
- **Vite** for development server and build
- **React Icons** for iconography
- **CSS** for styling and animation
- **JavaScript (ES6+)**

---

## How It Works

1. **Global Context:** `context.jsx` defines an AppContext and provides state and methods for opening/closing sidebar and modal. The context is accessed via a custom hook `useGlobalContext`.
2. **Data-driven UI:** `data.jsx` exports two arrays: `links` (sidebar navigation) and `social` (social links with icons).
3. **Main App:** `App.jsx` renders `Home`, `Modal`, and `Sidebar`.
4. **Home Component:** Contains buttons to open the sidebar and modal, wired to context methods.
5. **Sidebar Component:** Consumes context to display or hide itself, renders links and social icons.
6. **Modal Component:** Also consumes context for open/close behavior.

---

## Getting Started

1. **Clone the repository:**

   ```sh
   git clone https://github.com/arnobt78/Sidebar--React-Fundamental-Project-12.git
   cd Sidebar--React-Fundamental-Project-12
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Run locally:**

   ```sh
   npm run dev
   ```

4. **Build for production:**

   ```sh
   npm run build
   ```

5. **Preview production build:**

   ```sh
   npm run preview
   ```

---

## Component Walkthrough

### App.jsx

```jsx
import Home from "./Home";
import Modal from "./Modal";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  );
};
export default App;
```

- Renders all main UI components.

---

### Home.jsx

```jsx
import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={openModal} className="btn">
        show modal
      </button>
    </main>
  );
};
export default Home;
```

- Two buttons: open sidebar and open modal, using context methods.

---

### Sidebar.jsx

```jsx
import logo from "./logo.svg";
import { social, links } from "./data";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img src={logo} alt="coding addict" className="logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-links">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;
```

- Renders a sidebar with navigation and social icons, controlled by context state.

---

### Modal.jsx

```jsx
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
export default Modal;
```

- Shows a modal window when triggered by context state.

---

## Global State and Context

**context.jsx**

```jsx
import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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

export const useGlobalContext = () => useContext(AppContext);
```

- Provides global UI state and methods to all components via custom hook.

---

## Data Structure

**data.jsx**

```jsx
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from "react-icons/fa";

export const links = [
  { id: 1, url: "/", text: "home", icon: <FaHome /> },
  { id: 2, url: "/team", text: "team", icon: <FaUserFriends /> },
  { id: 3, url: "/projects", text: "projects", icon: <FaFolderOpen /> },
  { id: 4, url: "/calendar", text: "calendar", icon: <FaCalendarAlt /> },
  { id: 5, url: "/documents", text: "documents", icon: <FaWpforms /> },
];

export const social = [
  { id: 1, url: "https://www.twitter.com", icon: <FaFacebook /> },
  { id: 2, url: "https://www.twitter.com", icon: <FaTwitter /> },
  { id: 3, url: "https://www.twitter.com", icon: <FaLinkedin /> },
  { id: 4, url: "https://www.twitter.com", icon: <FaBehance /> },
  { id: 5, url: "https://www.twitter.com", icon: <FaSketch /> },
];
```

- Two arrays: `links` for navigation, `social` for social icons.

---

## Styling

- All styles are defined in `src/index.css`, including layout, transitions, and animations.
- Sidebar slides in/out, modal fades in/out, and buttons have interactive styling.
- Example CSS for modal and sidebar:

  ```css
  .modal-overlay {
    /* ... */
  }
  .modal-container {
    /* ... */
  }
  .sidebar {
    /* ... */
  }
  .show-sidebar {
    /* ... */
  }
  .sidebar-toggle {
    /* ... */
  }
  /* ...more in src/index.css */
  ```

---

## Learning Outcomes

By studying or extending this project, you'll learn:

- How to use React Context API for global UI state.
- How to build and compose reusable functional components.
- How to manage and share state with custom hooks.
- How to use data-driven rendering for navigation.
- How to style React components with CSS transitions and keyframes.
- How to organize a modern React project for clarity and scalability.

---

## Keywords

`React`, `Context API`, `Custom Hooks`, `Sidebar`, `Modal`, `Global State`, `Component Composition`, `Vite`, `React Icons`, `CSS Animation`, `Data-driven UI`, `Reusable Components`, `Educational Project`

---

## Example: Full Code Usage

**Minimal Example: Open Sidebar from Any Component**

```jsx
import { useGlobalContext } from "./context";

function AnyComponent() {
  const { openSidebar } = useGlobalContext();
  return <button onClick={openSidebar}>Open Sidebar</button>;
}
```

**How to Provide Context Globally**

````jsx
import { AppProvider } from "./context";

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById("root"),rom Any Component**

```jsx
import { useGlobalContext } from './context';

function AnyComponent() {
  const { openSidebar } = useGlobalContext();
  return <button onClick={openSidebar}>Open Sidebar</button>;
}
````

**How to Provide Context Globally**

```jsx
import { AppProvider } from "./context";

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById("root"),
);
```

---

## Conclusion

This Sidebar-Modal project is built to teach and demonstrate practical global state management in React using Context and custom hooks. It's a great foundation for expanding into more advanced patterns, and is a solid reference for best practices in component-based UI, state separation, and project organization.

**Happy Learning & Coding!**

---
