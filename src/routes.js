import NewUser from "./components/newUser/User";
import UserStart from "./components/newUser/UserStart";
import UserDetail from "./components/newUser/UserDetail";
import UserEdit from "./components/newUser/UserEdit";
import Home from "./components/Home";

export const routes = [
  {path: '', component: Home, name: 'home'},
  // {path: '/user/:id', component: NewUser},
  {
    path: '/user', component: NewUser, children: [
      {path: '', component: UserStart},
      {path: ':id', component: UserDetail},
      {path: ':id/edit', component: UserEdit, name:'userEdit'},
    ]
  },
  // {path: '/newuser', component: UserStart},
];
