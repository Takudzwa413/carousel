const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.sendFile(__dirname + '/client/public/index.html');
});
const carousel=[{
  desc: "yes",
  imgURL:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/334248/earth_front_2.jpg"
}]



app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));