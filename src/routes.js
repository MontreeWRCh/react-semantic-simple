import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout/DefaultLaout';

function Loading() {
  return <div>Loading...</div>;
}

const TableUsers = Loadable({
  loader: () => import('./views/tables/tableUsers'),
  loading: Loading,
});

const TableStriped = Loadable({
  loader: () => import('./views/tables/tableStriped'),
  loading: Loading,
});

const Setting = Loadable({
  loader: () => import('./views/setting/setting'),
  loading: Loading,
});


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/users', exact: true,  name: 'users', component: TableUsers },
  { path: '/timing', exact: true,  name: 'tableStriprd', component: TableStriped },
  { path: '/setting', exact: true,  name: 'setting', component: Setting },
];

export default routes;
