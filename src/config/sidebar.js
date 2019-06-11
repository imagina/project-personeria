const pages = config('pages') // Get Pages from config

/*Example group item. April 04, 2019
{
	title: "title",
	icon: "fas fa-icon",
	children: [
    pages.groupPage.pageName, //Single Item in group items
    {//Sub group into group pages
      title: 'title',
      icon: 'fas fa-icon',
      children: [
        pages.groupPage.pageName, //Single Item in group items
      ]
    },
  ]
}
*/

export default [
  pages.application.home,//Home
    pages.application.notices,//Home
    pages.application.act,//Home
  {//User
    title: 'Users',
    icon: 'fas fa-users',
    children: [
      pages.users.userIndex,//User Index
      pages.users.userDepartments,//Departments Index
      pages.users.userRoles,//Roles Index
    ]
  },
  {//Blog
    title: 'Blog',
    icon: 'fab fa-blogger',
    children: [
      pages.blog.posts, // posts setup
      pages.blog.categories, // categories setup
    ]
  },
  pages.media.index,//setup
  pages.slider.index,//setup
  pages.site.index,//setup
  /*{//E-commerce
  title: 'Commerce',
  icon: 'fas fa-wallet',
  children: [
    pages.eCommerce.products,//products index
    pages.eCommerce.categories,//products categories,
    pages.eCommerce.options,//products options
    pages.eCommerce.optionValues,//products options
  ]
},*/
  /*{//Places
    title: 'Places',
    icon: 'fas fa-map-marked-alt',
    children: [
      pages.places.places, // places setup
      pages.places.categories, // categories setup
      pages.places.schedules, // schedules setup
    ]
  },*/
]
