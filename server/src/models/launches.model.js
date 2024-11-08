const launches = new Map();

let latestFlighNumber = 1;

const launch = {
  flightNumber: 1,
  mission: "kepler",
  rocket: "Falcon 9",
  launchDate: new Date("December 5, 2021"),
  target: "Kepler-186 f",
  customer: ["NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function addNewLaunch(launch) {
  latestFlighNumber++;
  launches.set(
    latestFlighNumber,
    Object.assign(launch, {
      customer: ["NASA"],
      upcoming: true,
      upcoming: true,
      flightNumber: latestFlighNumber,
    }),
  );
}

function abortLaunchById(launchId) {
  const aborted = launches.get(launchId);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
}

function existsLaunchWithId(launchId) {
  console.log(launches);
  return launches.has(launchId);
}

function getAllLaunches() {
  return Array.from(launches.values());
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
  existsLaunchWithId,
  abortLaunchById,
};
