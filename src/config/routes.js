//Import pages
import  AdminHome from '../pages/admin/Users'
import AdminUsers from "../pages/admin/Users";
import AdminNoticias from "../pages/admin/Noticias";
//Client pages
import Inicio from "../pages/users/Inicio";
import IniciarSesion from "../pages/users/IniciarSesion";
import Registro from "../pages/users/Registro";
import Noticias from "../pages/users/Noticias";



const routesAdmin = [
  {
    patch: "/admin",
    component: AdminHome,
  },
  {
    patch: "/admin/users",
    component:AdminUsers ,
  },
  {
    patch: "/admin/noticias",
    component:AdminNoticias ,
  },
];

const routesClient = [
  {
    patch: "/noticias",
    component: Noticias,
  },
];

const routesShared = [
  {
    patch: "/",
    component: Inicio,
  },
  {
    patch: "/iniciarSesion",
    component: IniciarSesion,
  },
  {
    patch: "/registro",
    component: Registro,
  },
];

const routes = [...routesAdmin, ...routesClient, ...routesShared];

export default routes;
