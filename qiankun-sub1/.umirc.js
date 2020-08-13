import { defineConfig } from 'umi';

export default defineConfig({
  base: '/',
  mountElementId: 'sub1',
  title: 'sub app1',
  hash: true,
  nodeModulesTransform: {
    type: 'none',
  },
  targets: {
    ie: 10,
  },
  history: {
    type: 'hash',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: 'index' },
        { path: '/list', component: 'list' },
        { path: '/admin', component: 'admin' },
      ],
    },
  ],
  lessLoader: {
    test: /\.less$/,
    loader: 'less-loader', // compiles Less to CSS
  },
  qiankun: { slave: {} },
});
