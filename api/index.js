import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());

let lists = [{
  name: 'TODO',
  tasks: [{
    name: 'Foo',
    description: 'Lorem ipsum',
    label: 'red'
  }, {
    name: 'Bar',
    description: 'Hello world !',
    label: 'blue'
  }]
}, {
  name: 'DOING',
  tasks: [{
    name: 'Baz',
    description: '',
    label: null
  }]
}, {
  name: 'DONE',
  tasks: []
}];

app.get('/lists', function (req, res) {
  res.send(lists);
});

app.put('/lists', bodyParser.json(), function (req, res) {
  lists = req.body;
  res.send(lists);
});

const server = app.listen(8080, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
