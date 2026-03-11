# Sidebar Menu Router - React, Vite, JavaScript, Context API, Custom CSS Fundamental Project 12

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-4.1-646CFF)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-7.13-CA4245)](https://reactrouter.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React Icons](https://img.shields.io/badge/React_Icons-4.7-21A2F2)](https://react-icons.github.io/react-icons/)

An educational React application that demonstrates a sidebar menu and modal dialog controlled by React Context API, with client-side routing via React Router. It uses Vite for tooling, custom CSS for layout and animations, and a data-driven sidebar built from a single source of truth. No backend or API is required—everything runs in the browser for learning and instruction purposes.

- **Live Demo:** [https://sidebar-router.vercel.app/](https://sidebar-router.vercel.app/)

![Screenshot 2026-03-11 at 15 43 35](https://github.com/user-attachments/assets/de2b03ff-60f9-4b20-a0ee-13f745ec239e)
![Screenshot 2026-03-11 at 15 43 47](https://github.com/user-attachments/assets/51db12a7-8814-4750-9f98-6245b584a8a0)
![Screenshot 2026-03-11 at 15 43 54](https://github.com/user-attachments/assets/53b8ab78-ec27-4ed1-9ffd-31b42edd2326)

## Table of Contents

- [Project Summary](#project-summary)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [How to Run and Use](#how-to-run-and-use)
- [Environment Variables (.env)](#environment-variables-env)
- [Project Walkthrough](#project-walkthrough)
- [Routes and Pages](#routes-and-pages)
- [Components](#components)
- [Global State and Context API](#global-state-and-context-api)
- [Data Structure](#data-structure)
- [Styling](#styling)
- [Reusing Components in Other Projects](#reusing-components-in-other-projects)
- [Code Snippets and Teaching Content](#code-snippets-and-teaching-content)
- [Keywords](#keywords)
- [Conclusion](#conclusion)
- [License](#license)

---

## Project Summary

Sidebar Menu Router is a simple but complete React app that shows how to combine **React Context API** for global UI state (sidebar open/closed, modal open/closed) with **React Router** for multi-page navigation. The sidebar and modal can be opened or closed from anywhere in the app. Navigation links are defined in a single data file and rendered by the Sidebar; social icons open in a new tab. The app is built for learning: clear structure, no backend, and patterns you can reuse in larger projects.

---

## Features

- **Sidebar navigation:** Open and close a sidebar with navigation links (Home, Team, Projects, Calendar, Documents) and social icons.
- **Modal window:** Open and close a modal dialog from the home page; state is shared via Context.
- **Client-side routing:** React Router drives routes `/`, `/team`, `/projects`, `/calendar`, `/documents` with a shared layout.
- **Global state:** React Context API plus a custom hook (`useGlobalContext`) for sidebar and modal state.
- **Data-driven UI:** Sidebar links and social icons come from `src/data.jsx`; add or edit entries to change the menu.
- **Social links in new tab:** Social icons use `target="_blank"` and `rel="noopener noreferrer"`.
- **Responsive layout and animations:** Custom CSS with transitions and keyframes for sidebar and modal.
- **Lint and build:** ESLint and Vite scripts for development and production builds.

---

## Project Structure

```bash
.
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx           # Router, routes, Layout, Modal, Sidebar
│   ├── main.jsx          # Entry: React root + AppProvider
│   ├── context.jsx        # AppContext, AppProvider, useGlobalContext
│   ├── Layout.jsx        # Sidebar toggle + Outlet for page content
│   ├── Modal.jsx         # Modal overlay and content
│   ├── Sidebar.jsx       # Sidebar with nav + social links
│   ├── data.jsx          # links + social arrays (menu data)
│   ├── index.css         # Global and component styles
│   ├── logo.svg          # Sidebar logo
│   └── pages/
│       ├── Home.jsx      # Home route: intro text + modal button
│       ├── Team.jsx      # /team
│       ├── Projects.jsx  # /projects
│       ├── Calendar.jsx  # /calendar
│       └── Documents.jsx # /documents
├── index.html            # HTML shell + SEO meta
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

- **`src/`** – React components, context, data, and styles.
- **`src/pages/`** – Route-level components rendered inside the layout.
- **`public/`** – Static assets (e.g. favicon).
- **`index.html`** – Root HTML and meta tags; Vite injects the app script.

---

## Technology Stack

- **React 18** – UI with function components and hooks.
- **React Router 7** – Client-side routing (`BrowserRouter`, `Routes`, `Route`, `Link`, `Outlet`).
- **React Context API** – Global state for sidebar and modal.
- **Vite 4** – Dev server, HMR, and production build.
- **React Icons (Fa)** – Icons for menu items and buttons.
- **JavaScript (ES6+)** – No TypeScript; `.jsx` for components.
- **Custom CSS** – Global variables, layout, transitions, no UI framework.
- **ESLint** – Linting with React and React Hooks plugins.

There is **no backend or API** in this project; it is front-end only.

---

## Getting Started

1. **Clone the repository (or download the project):**

   ```bash
   git clone <repository-url>
   cd 12-sidebar
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   Open the URL shown in the terminal (e.g. `http://localhost:5173`) in your browser.

4. **Lint and build for production:**

   ```bash
   npm run lint
   npm run lint:fix   # auto-fix when possible
   npm run build
   npm run preview    # serve the built app locally
   ```

---

## How to Run and Use

- **Development:** Run `npm run dev`, then use the app in the browser. Click the **menu (hamburger) icon** to open the sidebar; use **“show modal”** on the home page to open the modal. Use sidebar links to switch between Home, Team, Projects, Calendar, and Documents. Social icons open their URLs in a new tab.
- **Production:** Run `npm run build`, then `npm run preview` to test the built output, or deploy the `dist/` folder to a static host (e.g. Vercel, Netlify).

---

## Environment Variables (.env)

This project **does not use environment variables** in its current form. All configuration is in code (e.g. `src/data.jsx`, `vite.config.js`). No `.env` file is required to run or build.

If you later add an API or feature that needs config (e.g. API base URL), you can:

1. Create a `.env` file in the project root.
2. Define variables with the `VITE_` prefix so Vite exposes them to the client, e.g.:

   ```env
   VITE_API_BASE_URL=https://api.example.com
   ```

3. Use them in code as `import.meta.env.VITE_API_BASE_URL`.
4. Add `.env` to `.gitignore` if it contains secrets; use `.env.example` to document required variables for others.

---

## Project Walkthrough

1. **Entry point:** `index.html` loads `src/main.jsx`. `main.jsx` renders the app inside `AppProvider` and imports global CSS.
2. **Provider:** `AppProvider` wraps the app and provides sidebar/modal state and methods via `AppContext`.
3. **Router:** `App.jsx` uses `BrowserRouter` and defines a layout route whose element is `Layout`; nested routes render Home, Team, Projects, Calendar, and Documents. `Modal` and `Sidebar` are rendered outside the routes so they stay mounted and can be toggled from any page.
4. **Layout:** `Layout` shows the sidebar-toggle button and an `<Outlet />` where the active route’s page component is rendered.
5. **Pages:** Each page in `src/pages/` is a simple component; only Home uses `useGlobalContext` to open the modal.
6. **Sidebar:** Reads `links` and `social` from `data.jsx`, renders nav with `Link` (in-app) and social with `<a target="_blank" rel="noopener noreferrer">`. Clicking a nav link closes the sidebar and navigates.
7. **Modal:** Renders when `isModalOpen` is true; the close button calls `closeModal` from context.

---

## Routes and Pages

| Route        | Component   | Description                        |
| ------------ | ----------- | ---------------------------------- |
| `/`          | `Home`      | Intro text and “show modal” button |
| `/team`      | `Team`      | Placeholder team page              |
| `/projects`  | `Projects`  | Placeholder projects page          |
| `/calendar`  | `Calendar`  | Placeholder calendar page          |
| `/documents` | `Documents` | Placeholder documents page         |

Routes are defined in `App.jsx`; the layout (sidebar toggle + outlet) is shared for all of them. There are **no API endpoints**; these are client-only routes.

---

## Components

- **App.jsx** – Sets up `BrowserRouter`, `Routes`, layout route, and child routes; renders `Modal` and `Sidebar` once.
- **Layout.jsx** – Renders the sidebar-toggle button and `<Outlet />` for the current route.
- **Modal.jsx** – Overlay and content box; visibility and `closeModal` come from `useGlobalContext()`.
- **Sidebar.jsx** – Aside with logo, close button, list of `links` (React Router `Link`), and list of `social` (`<a target="_blank">`). Uses `isSidebarOpen` and `closeSidebar` from context.
- **pages/Home.jsx** – Intro paragraph and button that calls `openModal()` from context.
- **pages/Team.jsx, Projects.jsx, Calendar.jsx, Documents.jsx** – Minimal educational pages with a heading and short text.

---

## Global State and Context API

All shared UI state lives in `context.jsx`:

- **State:** `isSidebarOpen`, `isModalOpen` (booleans).
- **Methods:** `openSidebar`, `closeSidebar`, `openModal`, `closeModal`.

Any component that needs to read or update this state uses the custom hook:

```jsx
import { useGlobalContext } from "./context";

const SomeComponent = () => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useGlobalContext();
  // use state and methods
};
```

The provider wraps the app in `main.jsx`:

```jsx
import { AppProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
);
```

---

## Data Structure

`src/data.jsx` exports two arrays used by the Sidebar.

**`links`** – Navigation items (path, label, icon):

```jsx
export const links = [
  { id: 1, url: "/", text: "home", icon: <FaHome /> },
  { id: 2, url: "/team", text: "team", icon: <FaUserFriends /> },
  // ...
];
```

**`social`** – External links (URL, icon), opened in a new tab:

```jsx
export const social = [
  { id: 1, url: "https://www.google.com/", icon: <FaFacebook /> },
  // ...
];
```

To add a new nav item: add an entry to `links` and a matching route and page in `App.jsx` and `src/pages/`. To add a social link: add an entry to `social`.

---

## Styling

- **`src/index.css`** – Global reset, CSS variables (colors, spacing, shadows), and styles for `.sidebar`, `.modal-overlay`, `.sidebar-toggle`, `.btn`, and layout. Sidebar and modal visibility use classes (e.g. `show-sidebar`, `show-modal`) and CSS transitions/keyframes.
- No separate CSS modules or component CSS files; class names are used in JSX and styled in `index.css`.
- Favicon and any public assets are in `public/` (e.g. `vite.svg`).

---

## Reusing Components in Other Projects

- **Context + hook:** Copy `context.jsx` and wrap your app with `AppProvider`; use `useGlobalContext()` wherever you need sidebar/modal state. You can rename the context or add more state (e.g. theme, user).
- **Sidebar:** Copy `Sidebar.jsx` and `data.jsx` (and adjust `data.jsx` to your links/social). Ensure your app has the same context and the same CSS class names, or refactor classes to match your design system.
- **Modal:** Copy `Modal.jsx` and the modal styles from `index.css`; use the same context for `isModalOpen` and `closeModal`.
- **Layout + routing:** Use the same pattern: a layout route with sidebar toggle + `<Outlet />`, and nested routes for each page. Replace page components with your own.
- **Data-driven menu:** Keep nav and social data in one module (like `data.jsx`) and map over it in the Sidebar so adding/removing items doesn’t require editing the Sidebar component.

---

## Code Snippets and Teaching Content

**Opening the sidebar from the layout:**

```jsx
// Layout.jsx
const { openSidebar } = useGlobalContext();
<button onClick={openSidebar} className="sidebar-toggle" type="button">
  <FaBars />
</button>;
```

**Closing the sidebar on navigation (Sidebar):**

```jsx
<Link to={url} onClick={closeSidebar}>
  {icon}
  {text}
</Link>
```

**Opening external links in a new tab (Sidebar):**

```jsx
<a href={url} target="_blank" rel="noopener noreferrer">
  {icon}
</a>
```

**Nested routes with a shared layout (App.jsx):**

```jsx
<Routes>
  <Route element={<Layout />}>
    <Route path="/" element={<HomePage />} />
    <Route path="/team" element={<Team />} />
    {/* ... */}
  </Route>
</Routes>
```

---

## Keywords

React, Vite, React Router, Context API, sidebar, modal, global state, hooks, JavaScript, JSX, custom CSS, single-page application, SPA, client-side routing, layout route, data-driven UI, React Icons, educational project, fundamental project.

---

## Conclusion

This project shows how to build a small multi-page React app with a persistent sidebar and modal, global state via Context, and routing with React Router. It is intended for learning and as a template you can extend (e.g. more pages, themes, or a future API) without changing the core patterns. Use the structure and snippets above to adapt the components and patterns to your own projects.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

## Happy Coding! 🎉

This is an **open-source project** - feel free to use, enhance, and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
