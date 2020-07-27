import NewUser from "./components/newUser/User";
import Home from "./components/Home";

export const routes = [
  {path: '', component: Home},
  {path: '/user/:id', component: NewUser},
];
