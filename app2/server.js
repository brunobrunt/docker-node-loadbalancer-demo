const express = require('express');
const app = express();
const port = 3002; // Adjust the port for App2

app.get('/api/data', (req, res) => {
  res.json({
    message: "Hello from App2",
    data: [
      { id: 1, name: "Alice Brown", age: 24 },
      { id: 2, name: "Bob White", age: 42 }
    ]
  });
});

app.listen(port, () => {
  console.log(`App2 listening at http://localhost:${port}`);
});

