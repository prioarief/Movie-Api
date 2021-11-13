const { default: axios } = require('axios');


const fetch = async (params) => {
	const { data } = await axios.get(process.env.OMDB_API_URL, {
		params: {
			apikey: process.env.OMDB_API_KEY,
			...params,
		},
	});
	return data;
};
module.exports = {
	search: async (req, res) => {
		try {
			const data = await fetch(req.query);
			res.status(200).json(data);
		} catch (error) {
			console.log(error);
		}
	},
	detail: async (req, res) => {
		try {
			const data = await fetch(req.params);
			res.status(200).json(data);
		} catch (error) {
			console.log(error);
		}
	},
};
