require('dotenv').config() // load environment variables from .env file or code can read what is in the .env file.


const app = require('./app')
const port = process.env.PORT  // port number to listen to. If the port is not set in the environment variable, it will use 3000 as default.

app.listen(port, () => {
    console.log(`App is listening on port ${port}`); // binding the port with the listen method - listening for connections. log a message to know if it is working.
  }
  )