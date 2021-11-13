const router = require('express').Router();
const movieRoute = require('./movies/route');

router.param('id', (req, res, next, id) => {
	// executes before route handler

	next();
});
router.use(movieRoute);
// router.use((req, res, next) => {
//     console.log(req.params.id)
//     next()
// })

module.exports = router;
