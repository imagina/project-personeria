export default {
	api : require('src/config/apiRoutes/api').default,
	app : require('src/config/apiRoutes/application').default,
	act : require('src/config/apiRoutes/acts').default,
	profile: require('@imagina/quser/_config/profile').default,
}