const express = require('express');
const app = express();
const cors = require('cors');
const port = 3002;

app.use(cors());

app.get('/', (_, res) => {
  return new Promise(resolve => {
    setTimeout(resolve, 5000);
  }).then(() => {
    res.send([{
      id: 1,
      title: 'test-data-40',
    },
    {
      id: 2,
      title: 'test-data-999',
    },]);
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})