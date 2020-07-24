import User from "./components/newUser/User";
import Home from "./components/Home";

export const routes = [
  {path: '', component: Home},
  {path: '/user', component: User},
];
