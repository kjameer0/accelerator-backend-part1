import appServer from "./index";
import supertest, { Response } from "supertest";
//these tests can be removed on making an actual project

describe("/test", () => {
  it("should respond with the string 'no data provided' when there is nothing in the request query", async () => {
    const mockApp = supertest(appServer);
    const res: Response = await mockApp.get("/");
    expect(res.text).toBe("typescript live");
  });
});

afterEach(() => {
  appServer.close();
});
