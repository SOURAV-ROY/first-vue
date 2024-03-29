// import NewUser from "./components/newUser/User";
// import UserStart from "./components/newUser/UserStart";
// import UserDetail from "./components/newUser/UserDetail";
// import UserEdit from "./components/newUser/UserEdit";
import Home from "./components/Home";
import Header from "./components/Header";

const NewUser = resolve => {
  require.ensure(['./components/newUser/User'], () => {
    resolve(require('./components/newUser/User'));
  }, 'user');
};

const UserStart = resolve => {
  require.ensure(['./components/newUser/UserStart'], () => {
    resolve(require('./components/newUser/UserStart'));
  }, 'user');
};

const UserDetail = resolve => {
  require.ensure(['./components/newUser/UserDetail'], () => {
    resolve(require('./components/newUser/UserDetail'));
  }, 'user');
};

const UserEdit = resolve => {
  require.ensure(['./components/newUser/UserEdit'], () => {
    resolve(require('./components/newUser/UserEdit'));
  }, 'user');
};

export const routes = [
  // {path: '', component: Home, name: 'home'},
  {
    path: '', name: 'home', components: {
      default: Home,
      'header-top': Header
    }
  },
  // {path: '/user/:id', component: NewUser},
  {
    // path: '/user', component: NewUser, children: [
    path: '/user', components: {
      default: NewUser,
      'header-bottom': Header
    }, children: [
      {path: '', component: UserStart},
      {
        path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
          console.log("Before Enter Inside User Details router setup");
          next();
        }
      },
      {path: ':id/edit', component: UserEdit, name: 'userEdit'},
    ]
  },
  // {path: '/newuser', component: UserStart},
  {path: '/redirect-me', redirect: {name: 'home'}},
  {path: '*', redirect: '/'},
];
