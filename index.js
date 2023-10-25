const express = require('express');
const app = express();

app.use(express.static('public'))
app.get('/js', (req, res) => {
  res.send({ hi: 'there' });
});
app.get('/', (req, res) => {
  res.sendFile('views/chart.html', {root: __dirname })
});

const port = 80;
app.listen(port);
console.log('population listen on port '+ port);
