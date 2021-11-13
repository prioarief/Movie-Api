const log = require('../helpers/log');
const controller = require('./controller');
const router = require('express').Router();

router.get('/search', log, controller.search);
router.get('/detail/:i', log, controller.detail);

module.exports = router;
