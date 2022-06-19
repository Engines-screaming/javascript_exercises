process.env.NODE_ENV = "test";

const request = require("supertest");
const app = require('../app');
let items = require('../fakeDB');

grocery_items = [
    {name: "cheerios", price: 20.00},
    {name: "bowl", price: 6.00},
    {name: "cheese", price: 450.00},
    {name: "ball", price: 150.00}
];

beforeEach(() => {
    grocery_items.forEach((item) => {
        items.push(item);
    });
})

afterEach(() => {
    grocery_items.length = 0;
})


// tests
describe("GET /items", function() {
    test("returns list of items", async function() {
        const res = await request(app).get('/items');

        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBe(4);
    });
});

describe("POST /items", () => {
    test("adds item to list", async () => {
        const res = await request(app)
                            .post("/items")
                            .send({name: "book", price: 650.00});
        
        expect(res.statusCode).toBe(200);
        expect(res.body).toStrictEqual({ added: {name: "book", price: 650.00}});
    });
});
