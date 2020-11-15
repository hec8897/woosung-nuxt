
const mysql = require("mysql"); 
// 우성 EC2 서버
 const client = mysql.createConnection({
   host: '211.47.75.102',
   user: 'woosungsoft',
   password: 'woosung6301!',
   port:3306,
   database: 'dbwoosungsoft',
   multipleStatements: true
 })

 setInterval(function () {
  client.query('SELECT 1');
}, 5000);

module.exports = client;