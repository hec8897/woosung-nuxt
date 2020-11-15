const express = require('express');
const router = express.Router();
const client = require("../config/database");   

module.exports = router;

router.get('/', function(req, res, next) {
    client.query("SELECT * FROM tb_farm_item ORDER BY idx DESC;", function(err, result, fields){
      if(err){
        console.log(err);
        console.log("쿼리문에 오류가 있습니다.");
      }
      else{
        res.send({result,query:'ok'});
      }
    });
});
