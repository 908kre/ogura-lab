import Error404 from '@/pages/Error404';
import TopPage from '@/pages/TopPage';


const main = [
  {
    path: '/',
    name: 'TopPage',
    component: TopPage
  },
];

const error = [
  {
    path: '*',
    name: 'Error404',
    component: Error404
  }
];

export default [].concat(main, error);

