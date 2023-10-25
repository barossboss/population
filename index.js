const express = require('express');
const app = express();

app.use(express.static('public'))
app.get('/js', (req, res) => {
  res.send({ hi: 'there' });
});
app.get('/', (req, res) => {
  res.sendFile('views/chart.html', {root: __dirname })
});

const port = process.env.PORT || 3000;

// Listen on `port` and 0.0.0.0
app.listen(port, "0.0.0.0", function () {
 
  console.log('population listen on port '+ port);
});
// app.listen(port);
