/**
 * Single source of truth for sidebar: nav links (routes) and social links (external URLs).
 * Add/remove items here; Sidebar.jsx maps over these arrays. URLs in links must match Route paths in App.jsx.
 */
import React from "react";
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

/** In-app navigation: url is the path used by React Router (e.g. /team). */
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "/team",
    text: "team",
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: "/calendar",
    text: "calendar",
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: "/documents",
    text: "documents",
    icon: <FaWpforms />,
  },
];

/** External links: rendered as <a target="_blank"> in Sidebar (open in new tab). */
export const social = [
  {
    id: 1,
    url: "https://www.google.com/",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.google.com/",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.google.com/",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.google.com/",
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: "https://www.google.com/",
    icon: <FaSketch />,
  },
];
