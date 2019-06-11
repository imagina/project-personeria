import usersPages from '@imagina/quser/_config/pages'

usersPages.login.layout = require('src/layouts/app/user/login').default;
usersPages.register.layout = require('src/layouts/app/user/register').default;
export default {
  version: '0.0.1',
  modules: {
    apiRoutes: {//All api routes
      api: require('src/config/apiRoutes/api').default,
      app: require('src/config/apiRoutes/application').default,
      site: require('@imagina/qsite/_config/site').default,
      profile: require('@imagina/quser/_config/profile').default,
      media: require('@imagina/qmedia/_config/media').default,
      blog: require('@imagina/qblog/_config/blog').default,
      slider: require('@imagina/qslider/_config/slider').default,
      acts : require('src/config/apiRoutes/acts').default,
      //places: require('@imagina/qplaces/_config/places').default,
      //eCommerce: require('@imagina/qcommerce/_config/apiRoutes').default,
    },
    pages: {//All Pages
      users: usersPages,
      media: require('@imagina/qmedia/_config/pages').default,
      site: require('@imagina/qsite/_config/pages').default,
      blog : require('@imagina/qblog/_config/pages').default,
      slider : require('@imagina/qslider/_config/pages').default,
      //eCommerce : require('@imagina/qcommerce/_config/pages').default,
      //places : require('@imagina/qplaces/_config/pages').default,
      application: require('src/config/pages/application').default, //<-----Always last
    },
    store: {//All Store's
      app: require('src/store/app/index').default,
      auth: require('@imagina/quser/_store/index').default,
      site: require('@imagina/qsite/_store/index').default,
      blog: require('@imagina/qblog/_store/index').default,
    }
  },
  storageKeysToSave: [
    'userToken',
    'userId',
    'userData',
    'offlineRequests',
    'notifications',
    'auth.department.id',
    'auth.role.id'
  ]
}