/* URL Mapping */

export default

[

  {
    component: () => import(
      /* webpackChunkName: "Welcome" */
               '../../views/Dashboard.vue'),
    name:                  'Welcome',
    path:                 '/',
  },

  {
    component: () => import(
      /* webpackChunkName: "News" */
               '../../views/News.vue'),
    name:                  'News',
    path:                 '/News',
  },

  {
    component: () => import(
      /* webpackChunkName: "ReportMaker" */
               '../../views/ReportMaker.vue'),
    name:                  'ReportMaker',
    path:                 '/ReportMaker',
  },


// ------------------------------------------ DEVELOPER

  {
    component: () => import(
      /* webpackChunkName: "DevBlog" */
               '../../views/DevBlog.vue'),
    name:                  'DevBlog',
    path:                 '/DevBlog',
  },

// ------------------------------------------ USER

  {
    component: () => import(
      /* webpackChunkName: "Dashboard" */
               '../../views/Dashboard.vue'),
    name:                  'Dashboard',
    path:                 '/Dashboard',
  },

  {
    component: () => import(
      /* webpackChunkName: "Profile" */
               '../../views/Profile.vue'),
    name:                  'Profile',
    path:                 '/Profile',
  },

  {
    component: () => import(
      /* webpackChunkName: "ProfileBookmarks" */
               '../../views/ProfileBookmarks.vue'),
    name:                  'ProfileBookmarks',
    path:                 '/Profile/Bookmarks',
  },

  {
    component: () => import(
      /* webpackChunkName: "ProfileFilters" */
               '../../views/ProfileFilters.vue'),
    name:                  'ProfileFilters',
    path:                 '/Profile/Filters',
  },

// ------------------------------------------ DB

  {
    component: () => import(
      /* webpackChunkName: "Products" */
               '../../views/Products.vue'),
    name:                  'Products',
    path:                 '/Products',
  },

  {
    component: () => import(
      /* webpackChunkName: "ProductInfo" */
               '../../views/ProductInfo.vue'),
    name:                  'ProductInfo',
    path:                 '/Products/:id',
  },

  {
    component: () => import(
      /* webpackChunkName: "Components" */
               '../../views/Components.vue'),
    name:                  'Components',
    path:                 '/Components',
  },

  {
    component: () => import(
      /* webpackChunkName: "ComponentInfo" */
               '../../views/ComponentInfo.vue'),
    name:                  'ComponentInfo',
    path:                 '/Components/:id',
  },

  {
    component: () => import(
      /* webpackChunkName: "Companies" */
               '../../views/Companies.vue'),
    name:                  'Companies',
    path:                 '/Companies',
  },

  {
    component: () => import(
      /* webpackChunkName: "CompanyInfo" */
               '../../views/CompanyInfo.vue'),
    name:                  'CompanyInfo',
    path:                 '/Companies/:id',
  },

  {
    component: () => import(
      /* webpackChunkName: "Contacts" */
               '../../views/Contacts.vue'),
    name:                  'Contacts',
    path:                 '/Contacts',
  },

  {
    component: () => import(
      /* webpackChunkName: "ContactInfo" */
               '../../views/ContactInfo.vue'),
    name:                  'ContactInfo',
    path:                 '/Contacts/:id',
  },

// ------------------------------------------

]
