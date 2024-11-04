const PORT = 8000;

const server = require("./app");

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
