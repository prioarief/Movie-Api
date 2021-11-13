const { Logs } = require('../db/models');

module.exports = async (req, res, next) => {
	try {
		let endpoint = req.path;
		let parameters = JSON.stringify({ ...req.query, ...req.params });
		if (req.params.i) {
			endpoint = req.path.replace(`/${req.params.i}`, '');
		}
		const data = {
			endpoint,
			parameters,
		};
		await Logs.create(data);
		next();
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'error server' });
	}
};
