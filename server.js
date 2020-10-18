const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3001);
app.locals.title = 'Rancid Tomatillos Movies';

app.get('/', (request, response) => {
  response.send('Here are some movies and ratings');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});