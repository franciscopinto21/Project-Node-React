const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// Use the routes defined in routes.js
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
