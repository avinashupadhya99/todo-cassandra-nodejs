const express = require('express');
const router = express.Router();

const dbClient = require('../models/database_connection');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/get/byid', function(req, res, next) {
	const query_param = req.query;

	dbClient.execute("SELECT * FROM users WHERE userid = ?", [query_param.userid], { prepare: true })
	.then(result => {

		if(result.rowLength > 0 ) {
			res.send({ "Message": `Found ${result.rowLength} users`, "User": result.first() });
		} else {
			res.send({ "Message": "No user found", "User": null });
		}
	})
	.catch(error => {
		console.error("Internal error:" + error);
        return next(error);
	});
});

router.post('/new', function(req, res, next) {
	const query_param = req.query;

	dbClient.execute("SELECT * FROM users WHERE userid = ?", [query_param.userid], { prepare: true })
	.then(result => {

		if(result.rowLength > 0 ) {
			res.send({ "Message": `Found ${result.rowLength} users`, "User": result.first() });
		} else {
			res.send({ "Message": "No user found", "User": null });
		}
	})
	.catch(error => {
		console.error("Internal error:" + error);
        return next(error);
	});
});

module.exports = router;
