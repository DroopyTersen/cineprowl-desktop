var path = require('path');
var router = {};
router.routes = [{
	path: "/",
	file: "html/home.html"
}, {
	path: "/movies",
	file: "html/movies.html"
}]

router.setup = function(app) {
	router.routes.forEach(route => {
		var method = route.method || "get";
		app[method](route.path, function(req, res) {
			var basePath = path.dirname(__dirname);
			res.sendFile(path.join(basePath, route.file));
		})
	});
}
module.exports = router;