import BDCoruse from '../pages/BDCoruse';
import Infopack from '../pages/Infopack';
import Tutorials from '../pages/Tutorials';
import MainPage from './../pages/MainPage';

const routes = [
  { path: "/", name: "Home", element: MainPage },
  { path: "/index", name: "Home", element: MainPage },
  { path: "/home", name: "Home", element: MainPage },
  { path: "/infopack", name: "Package", element: Infopack },
  { path: "/courses", name: "Tutorial Page", element: Tutorials },
  { path: "/bd", name: "Tutorial Page", element: BDCoruse },

];

export default routes;
