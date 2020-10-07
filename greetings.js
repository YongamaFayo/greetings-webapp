module.exports = function Greetings() {

    var list = {};


    // async function addBooking(params) {

    //     const INSERT_QUERY = "insert into drbooking (name, day, arriving_on) values ($1, $2, $3)";
    //     await pool.query(INSERT_QUERY, [params.name, params.day, params.arriving_on]);
    
    // }


    function choice(Greet, name) {


        if (Greet === "IsiXhosa") {
            return "molo , " + name;

        }
        else if (Greet === "English") {
            return "hello , " + name;
        }

        else if (Greet === "Afrikaans") {
            return "hallo , " + name;
        }

    }

    function setName(name) {
        if (list[name] === undefined) {
            list[name] = 0;
        }
        list[name]++
    }

    function counter() {
        return Object.keys(list).length

    }

    function namesGreeted() {
        return list
    }

    function userCounter(name) {
        for (const key in list) {
            if (key === name) {
                var value = list[key];
            }
        }
        return value;
    }
    function reset() {

        // list.length = 0;
        list= {}

    }
    // function clear() {

    //     namesGreeted.length = 0;
    // }


    function noName() {
        if (name === "") {
            message1.innerHTML = "Please enter name";
            return;
        }
    }


    return {

        choice,
        setName,
        counter,
        namesGreeted,
        userCounter,
        reset,
        noName
        
        // setSettings,
        // getSettings

    };

};

