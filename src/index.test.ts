import appServer from "./index";
import supertest, { Response } from "supertest";
//these tests can be removed on making an actual project

describe("/test", () => {
  it("should respond with html", async () => {
    const mockApp = supertest(appServer);
    const res: Response = await mockApp.get("/");
    expect(res.headers['content-type']).toContain("text/html");
  });
});

afterEach(() => {
  appServer.close();
});
