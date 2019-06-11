//Layout container
import master from 'src/layouts/master'
import config from 'src/layouts/config'
import notFound from 'src/layouts/404'

//Middleware
import auth from '@imagina/quser/_router/middlewares/auth'
import access from '@imagina/quser/_router/middlewares/access'

export default {
	//Home Page
	home: {
		permission: null,
		activated: true,
		path: '/home',
		name: 'app.home',
		layout: require('src/layouts/index').default,
		containerLayout: master,
		title: 'Home',
		icon: 'fas fa-home',
		middleware: [auth]
	},
    notices: {
        permission: null,
        activated: true,
        path: '/noticias',
        name: 'app.noticias',
        layout: require('src/layouts/pages/news').default,
        containerLayout: master,
        title: 'Noticias',
        icon: 'fas fa-newspaper',
        middleware: [auth]
    },
    act: {
        permission: null,
        activated: true,
        path: '/actas',
        name: 'app.act',
        layout: require('src/layouts/pages/proceedings').default,
        containerLayout: master,
        title: 'Actas',
        icon: 'fas fa-file',
        middleware: [auth]
    },
	//Config Page
	config: {
		permission: null,
		activated: true,
		path: '/config',
		name: 'app.config',
		layout: require('src/layouts/app/config').default,
		containerLayout: config,
		title: 'Config',
		icon: 'fas fa-home',
	},
	//Not found Page
	notFound: {
		permission: null,
		activated: true,
		path: '*',
		name: 'app.not.found',
		layout: null,
		containerLayout: notFound,
		title: 'Not Found',
		icon: 'fas fa-chart-bar'
	},
}