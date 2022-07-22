import Infopack from '../pages/Infopack';
import MainPage from './../pages/MainPage';

const routes = [
  { path: "/", name: "Home", element: MainPage },
  { path: "/index", name: "Home", element: MainPage },
  { path: "/home", name: "Home", element: MainPage },
  { path: "/infopack", name: "Package", element: Infopack },

];

export default routes;
