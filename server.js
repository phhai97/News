const express = require('express');
const next = require('next');
const routes = require('./src/routes');

const port = parseInt(process.env.NEXT_PUBLIC_PORT, 10) || 4000;
const dev = process.env.NEXT_PUBLIC_NODE_ENV !== 'production';
const app = next({dir: `./src`, dev});
const handle = routes.getRequestHandler(app);

// Handle Login
// const authChecker = (req, res, next) => {
// 	if (req.cookies.token || req.path === Configs.loginPath || Helpers.isExceptionUrl(req.path)) {
// 		next();
// 	} else {
// 		res.redirect(Configs.loginPath);
// 	}
// };

app.prepare().then(() => {
	const server = express();
	// server.use(authChecker);
	server.use(handle);
	server.listen(port, (err) => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`)
	})
});
