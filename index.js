const server = require('./api/server');
const PORT = process.env.PORT || 8080;
require('dotenv').config();

server.listen(PORT, ()=>{
  console.log(`listening on ${PORT}`);
});


