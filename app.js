const express = require('express');
const fs = require('fs')

const app = express();

// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .json({ message: 'Hello from the server side!', app: 'Notours' });
// });

// app.post('/', (req, res) => {
//   res.send('You can post to this endpoint...');
// });

const tours = fs.readFileSync('')

app.get('/api/v1/tours',(req,res)=>{

})

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
