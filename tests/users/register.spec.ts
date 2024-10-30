import request from "supertest";
import app from "../../src/app";
describe("POST : /auth/register => User Registration", () => {
    describe("Given all fields", () => {
        it("should return 201 status code", async () => {
            // Arrange
            const userData = {
                firstName: "test",
                lastname: "1",
                email: "test@example.com",
                password: "test123",
            };
            // Act
            const response = await request(app)
                .post("/auth/register")
                .send(userData);
            // Assert
            expect(response.statusCode).toBe(201);
        });

        it("should return valid json response", async () => {
            // Arrange
            const userData = {
                firstName: "test",
                lastname: "1",
                email: "test@example.com",
                password: "test123",
            };
            // Act
            const response = await request(app)
                .post("/auth/register")
                .send(userData);
            // Assert
            expect(response.headers["content-type"]).toEqual(
                expect.stringContaining("application/json"),
            );
        });

        it("should persist the user in the database", async () => {
            // Arrange
            const userData = {
                firstName: "test",
                lastname: "1",
                email: "test@example.com",
            };
            // Act
            await request(app).post("/auth/register").send(userData);
            // Assert
        });
    });

    describe("Fields are missing", () => {});
});
