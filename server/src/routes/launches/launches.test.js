const request = require("supertest");
const app = require("../../app");
describe("test get /launches", () => {
  test("It should respond with status 200", async () => {
    const response = await request(app).get("/launches");
    expect(response.statusCode).toBe(200);
  });
});

describe("test post /launches", () => {
  const completeLaunchData = {
    mission: "USS Enterprise",
    rocket: "NCC-1701-D",
    target: "Kepler-186 f",
    launchDate: "January 4, 2022",
  };

  const launchDataWithoutDate = {
    mission: "USS Enterprise",
    rocket: "NCC-1701-D",
    target: "Kepler-186 f",
  };

  test("It should respond with status 201", async () => {
    const response = await request(app)
      .post("/launches")
      .send({
        mission: "USS Enterprise",
        rocket: "NCC-1701-D",
        launchDate: "January 4, 2022",
        target: "Kepler-186 f",
      })
      .expect(201)
      .expect("content-type", /json/);
  });

  test("It should respond with status 400", async () => {});
  test("It should respond with status 400", async () => {});
});
