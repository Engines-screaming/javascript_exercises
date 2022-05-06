const { MarkovMachine } = require("./markov.js");


describe("Markov Machine Tests", function() {
    test("create instance", function() {
        let mk = new MarkovMachine("test string");
        const new_text = mk.makeText(100);
        expect(typeof(new_text)).toBe("string");
    })

})