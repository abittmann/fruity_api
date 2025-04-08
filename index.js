const app = require('./app')
const port = 3000;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`); // binding the port with the listen method - listening for connections. log a message to know if it is working.
  }
  )