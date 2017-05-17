const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/api/classify/:input', (req, res) =>{
  //console.log(req);
  result = {"res": "true"}
  return res.send(200, result);
})

module.exports = router;