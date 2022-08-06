import Infopack from '../pages/Infopack';
import Tutorials from '../pages/Tutorials';
import MainPage from './../pages/MainPage';

const routes = [
  { path: "/", name: "Home", element: MainPage },
  { path: "/index", name: "Home", element: MainPage },
  { path: "/home", name: "Home", element: MainPage },
  { path: "/infopack", name: "Package", element: Infopack },
  { path: "/courses", name: "Tutorial Page", element: Tutorials },

];

export default routes;
