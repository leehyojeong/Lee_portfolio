var express = require('express');
var router = express.Router();

router.get('/', (req,res)=>{
    res.send({username:'이효정'});
});
router.get('/next', (req, res)=>{
    res.send({username:'다음 페이지'});
});

module.exports = router;