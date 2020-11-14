const express = require('express');
const router = express.Router();
const client = require("../config/database");   

module.exports = router;

router.get('/', function(req, res, next) {
  client.query("SELECT * FROM tb_faq ORDER BY idx DESC;", function(err, result, fields){
    if(err){
      console.log(err);
      console.log("쿼리문에 오류가 있습니다.");
    }
    else{
      res.send({result,query:'ok'});
    }
  });
});
router.post('/join', function(req, res, next) {
  const Data = [
    req.body.join,
    req.body.idx
]
const sql = "UPDATE tb_faq SET `join` = ? WHERE idx=?";
client.query(sql,Data,
    function(err, result){
        if(err){
            console.log(err);
            console.log("쿼리문에 오류가 있습니다.");
        }
        else{
            res.send({result,query:'ok'});
        }
  });
});

router.post('/new', function(req, res, next) {
    var params = [
      req.body.title, 
      req.body.cate, 
      req.body.midcate, 
      req.body.private, 
      req.body.Desc,
      req.body.date, 
    ];
    const sql = "INSERT INTO tb_faq (`tit`,`cate`,`mid_cate`,`active`,`desc`,`date`) VALUES(?,?,?,?,?,?)";
    client.query(sql,params, 
        function(err, result){
            if(err){
                console.log(err);
                console.log("쿼리문에 오류가 있습니다.");
            }
            else{
                res.send({result,query:'ok'});
            }
      });
  });

  router.put('/update', function(req, res, next) {
    const Data = [
      req.body.active, 
      req.body.cate, 
      req.body.desc, 
      req.body.mid_cate, 
      req.body.tit, 
      req.body.idx
    ];
  
    const sql = "UPDATE tb_faq SET `active` = ?, `cate` = ?, `desc` = ?, `mid_cate` = ?,`tit` = ? WHERE idx=?";
    client.query(sql,Data, 
        function(err, result){
            if(err){
                console.log(err);
                console.log("쿼리문에 오류가 있습니다.");
            }
            else{
                res.send({query:'ok'});
            }
      });
  });

  router.post('/delete', function(req, res, next) {
    const idx = req.body.idx
    const sql = 'DELETE FROM tb_faq WHERE idx=?';
    client.query(sql,idx, 
        function(err, result){
            if(err){
                console.log(err);
                console.log("쿼리문에 오류가 있습니다.");
            }
            else{
                res.send({query:'ok'});
            }
      });
  });

router.post('/:idx', function(req, res, next) {
  const idx = req.body.idx
  client.query(`SELECT * FROM tb_faq WHERE idx = ${idx};`, function(err, result, fields){
    if(err){
      console.log(err);
      console.log("쿼리문에 오류가 있습니다.");
    }
    else{
      res.send({result,query:'ok'});
    }
  });
});