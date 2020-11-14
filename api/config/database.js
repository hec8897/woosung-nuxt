
const mysql = require("mysql"); 
// 우성 EC2 서버
 const client = mysql.createConnection({
   host: '211.47.75.102',
   user: 'woosungsoft',
   password: 'woosung6301!',
   port:3306,
   database: 'dbwoosungsoft',
   multipleStatements: true
   //process.env.DB_DATABASE
 })

 function handleDisconnect() {
    db.connect(function(err) {            
      if(err) {                            
        console.log('error when connecting to db:', err);
        setTimeout(handleDisconnect, 2000); 
      }                                   
    });                                 
                                           
    db.on('error', function(err) {
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