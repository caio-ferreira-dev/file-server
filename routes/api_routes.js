const router = require('express').Router();
const {
    homePage,
    download
} = require('../controller/api_controller')

router.route('/').get(homePage);

module.exports = router;