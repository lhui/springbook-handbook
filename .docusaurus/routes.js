import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/springboot-handbook/',
    component: ComponentCreator('/springboot-handbook/', 'e55'),
    exact: true
  },
  {
    path: '/springboot-handbook/__docusaurus/debug',
    component: ComponentCreator('/springboot-handbook/__docusaurus/debug', '40c'),
    exact: true
  },
  {
    path: '/springboot-handbook/__docusaurus/debug/config',
    component: ComponentCreator('/springboot-handbook/__docusaurus/debug/config', '307'),
    exact: true
  },
  {
    path: '/springboot-handbook/__docusaurus/debug/content',
    component: ComponentCreator('/springboot-handbook/__docusaurus/debug/content', '252'),
    exact: true
  },
  {
    path: '/springboot-handbook/__docusaurus/debug/globalData',
    component: ComponentCreator('/springboot-handbook/__docusaurus/debug/globalData', '2fd'),
    exact: true
  },
  {
    path: '/springboot-handbook/__docusaurus/debug/metadata',
    component: ComponentCreator('/springboot-handbook/__docusaurus/debug/metadata', 'df0'),
    exact: true
  },
  {
    path: '/springboot-handbook/__docusaurus/debug/registry',
    component: ComponentCreator('/springboot-handbook/__docusaurus/debug/registry', 'd28'),
    exact: true
  },
  {
    path: '/springboot-handbook/__docusaurus/debug/routes',
    component: ComponentCreator('/springboot-handbook/__docusaurus/debug/routes', '379'),
    exact: true
  },
  {
    path: '/springboot-handbook/markdown-page',
    component: ComponentCreator('/springboot-handbook/markdown-page', '4bc'),
    exact: true
  },
  {
    path: '/springboot-handbook/docs',
    component: ComponentCreator('/springboot-handbook/docs', '568'),
    routes: [
      {
        path: '/springboot-handbook/docs',
        component: ComponentCreator('/springboot-handbook/docs', 'c0e'),
        routes: [
          {
            path: '/springboot-handbook/docs',
            component: ComponentCreator('/springboot-handbook/docs', 'd34'),
            routes: [
              {
                path: '/springboot-handbook/docs/category/just-start',
                component: ComponentCreator('/springboot-handbook/docs/category/just-start', '64e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/springboot-handbook/docs/category/配置环境',
                component: ComponentCreator('/springboot-handbook/docs/category/配置环境', '8ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/springboot-handbook/docs/qianyan',
                component: ComponentCreator('/springboot-handbook/docs/qianyan', '99a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/springboot-handbook/docs/try-it/try-it',
                component: ComponentCreator('/springboot-handbook/docs/try-it/try-it', '99f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/springboot-handbook/docs/tutorial-basics/config-env',
                component: ComponentCreator('/springboot-handbook/docs/tutorial-basics/config-env', '7ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/springboot-handbook/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/springboot-handbook/docs/tutorial-basics/markdown-features', 'b5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/springboot-handbook/docs/xuyan',
                component: ComponentCreator('/springboot-handbook/docs/xuyan', '258'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
