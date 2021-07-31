import GifPage from "pages/gif-browser";
import PlaylistPage from "pages/create-playlist";
import LoginPage from "pages/login";

export const PAGES = [
  {
    path: "/",
    component: LoginPage,
    navbar: false,
    exact: true,
  },
  {
    path: "/playlist",
    component: PlaylistPage,
    navbar: true,
    exact: true,
    name: "Playlist",
  },
  {
    path: "/search-gif",
    component: GifPage,
    navbar: true,
    exact: true,
    name: "Search GIF",
  },
  {
    path: "/trending-gif",
    component: GifPage,
    navbar: true,
    exact: true,
    name: "Trending",
  },
];
