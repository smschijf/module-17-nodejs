const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/style', express.static(path.join(__dirname, 'style')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/test', (req, res) => {
  res.send('Successful test response.');
});

app.listen(3000, () => console.log('App is listening on port 3000.'));