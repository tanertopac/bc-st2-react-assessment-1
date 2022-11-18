const express = require('express');
const cors = require('cors');

const port = 3001;

const users = require('./data/users.json');

const app = express();

app.use(cors());


app.get('/api/users/:id', (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  
  const userId = parseInt(request.params.id);
  const user = users.find(({id}) => id === userId);
  if(!user) {
    console.log('Not found user with id: ', userId);
    response.status(404);
    response.send({ error: `User with id: ${userId} Not found` });
  } else response.status(200).send(JSON.stringify(user));

});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
})
