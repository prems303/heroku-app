var express = require('express')
var app = express()

app.get('/', function(req, res) {
  res.send('<h1>Hellobhjbhjbjh!</h1>')
})
app.get('/td', function(req, res) {
  res.send('<h1>Hg</h1>')
})

var PORT = process.env.PORT || 3000
app.listen (PORT, function() {
  console.log  ('Server running')
})
