import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3ca'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '48a'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '1d3'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '846'),
            routes: [
              {
                path: '/docs/category/just-start',
                component: ComponentCreator('/docs/category/just-start', '7de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/配置环境',
                component: ComponentCreator('/docs/category/配置环境', '7b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/qianyan',
                component: ComponentCreator('/docs/qianyan', '7fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/try-it/try-it',
                component: ComponentCreator('/docs/try-it/try-it', '718'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/config-env',
                component: ComponentCreator('/docs/tutorial-basics/config-env', '3df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', '4b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/xuyan',
                component: ComponentCreator('/docs/xuyan', 'e68'),
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
    path: '/',
    component: ComponentCreator('/', 'a03'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
