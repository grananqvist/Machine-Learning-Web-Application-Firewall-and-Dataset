const express = require('express');
const router = express.Router();
var requestify = require('requestify');

router.get('/classify/:input', (req, res) =>{
  requestify.get('http://localhost:3001/' + req.params.input).then(function(response) {
		res.send(response.getBody());
	})
})

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});



module.exports = router;