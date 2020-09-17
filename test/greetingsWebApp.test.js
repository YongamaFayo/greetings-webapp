const assert = require('assert');
let Greetings = require("../greetings");

describe("greetings exercise", function () {
    it("should be able to set names", function () {
        let greetings = Greetings();
        var names = greetings.choice("IsiXhosa", "Yongama")
        
        assert
       
        // assert.equal(names, 'Molo, Lindelwa');

    })

    it("should be able to greet a person in English", function () {
        let greetings = Greetings();
        var message = greetings.choice('English', 'Yongama')
    
        // assert.equal(message, "Hello, Yongama");
    })

    it("should be able to greet a person in IsiXhosa", function () {
        let greetings = Greetings();
        var message = greetings.choice('IsiXhosa', 'Yongama')
    
        // assert.equal(message, "Molo, Yongama"); 
    })

    it("should be able to greet a person in Afrikaans", function () {
        let greetings = Greetings();
        var message = greetings.choice('Afrikaans', 'Yongama')
    
        // assert.equal(message, "Hallo, Yongama");
    })

    it("should count how many names hve been inserted", function () {
        let greetings = Greetings();

        greetings.setName("English", "Yongama");
        greetings.setName("Isixhosa", "Yongama");
     

        // assert.equal(2, greetings.counter());
    })
});
