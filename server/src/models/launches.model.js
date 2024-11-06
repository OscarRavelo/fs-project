const launches = new Map();

const launch = {
  flightNumber: 1,
  mission: "kepler",
  rocket: "Falcon 9",
  launchDate: new Date("December 5, 2021"),
  destination: "Kepler-186 f",
  customer: ["NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

module.exports = {
  launches,
};
