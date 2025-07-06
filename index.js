const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.end('Hello from Node.js App in Kubernetes!');
});
server.listen(port, () => console.log(`Server running on port ${port}`));

