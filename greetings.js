module.exports = function Greetings() {

    var list =  {};

  

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
        if (list[name] ===undefined) {
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
    

    return {

        choice,
        setName,
        counter,
        namesGreeted,
        userCounter
        // setSettings,
        // getSettings

    }




}





