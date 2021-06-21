import { lazy } from 'react';

const Signin = lazy(() => import('../pages/singin'));
const Signup = lazy(() => import('../pages/singnup'));
const Profiles = lazy(() => import('../pages/profiles'));
const Jobs = lazy(() => import('../pages/jobs'));

const routes = [
  {
    path: '/',
    exact: true,
    component: Jobs,
  },
  {
    path: '/signin',
    exact: true,
    component: Signin,
  },
  {
    path: '/signup',
    exact: true,
    component: Signup,
  },
  {
    path: '/profiles',
    exact: true,
    component: Profiles,
  },
];

export default routes;
