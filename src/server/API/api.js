var express = require('express');
var router = express.Router();

/**
 * Get Now showing listing .
 */
router.get("<API_URL>", function(req, res) {
    console.log('res: ', res)
})

module.exports = router;
