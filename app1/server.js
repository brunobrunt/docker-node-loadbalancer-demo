const express = require('express');
const app = express();
const port = 3001; // You can adjust the port as needed

app.get('/api/data', (req, res) => {
  res.json({
    message: "Hello from App1",
    data: [
      { id: 1, name: "John Doe", age: 28 },
      { id: 2, name: "Jane Smith", age: 34 }
    ]
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App1 listening at http://localhost:${port}`);
});

