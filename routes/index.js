var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
*/
router.post('/', function(req, res, next) {
  console.log(req.query.payload);
});

module.exports = router;
