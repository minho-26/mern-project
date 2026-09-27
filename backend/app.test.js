require("dotenv").config({ path: "./.env" });

const request = require("supertest");
const app = require("./app");
const mongoose = require("mongoose");
beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
});

afterAll(async () => {
    await mongoose.connection.close();
}); 

describe("Signup API", () => {
    test ("should create a nrew user" , async () => {
        const email = `test-${Date.now()}@example.com`;
        const response = await request(app)
        .post("/signup")
        .send({ 
            username: "testuser",
            email: email,
            password: "testpassword"
        });
        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.token).toBeDefined();
    });
}); 

