const { getNodeText } = require('@testing-library/react');
var express = require('express');
var router = express.Router();

router.get('/', async (req,res)=>{
    try{
        res.send({username:'이효정'});
    }catch(err){
        console.log(err);
        next(err);
    }
});

router.get('/next', (req, res)=>{
    res.send({username:'다음 페이지'});
});

module.exports = router;