
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

 // database 연결 유지
 function handleDisconnect() {
    client.connect(function(err) {            
      if(err) {                            
        console.log('error when connecting to db:', err);
        setTimeout(handleDisconnect, 2000); 
      }                                   
    });                                 
                                           
    client.on('error', function(err) {
      console.log('db error', err);
      if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
        return handleDisconnect();                      
      } else {                                    
        throw err;                              
      }
    });
  }
  
  handleDisconnect();
 

module.exports = client;