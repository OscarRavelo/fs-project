const PORT = 8000;

const http = require("http");

const { loadPlanetsData } = require("./models/planets.model");

const server = require("./app");

async function startServer() {
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}
startServer();
