 
module.exports = function GreetingsRoute (greetings) {
    async function toGreet (req, res) {
        let textArea = req.body.greetingArea;
        let lang = req.body.language;
        try {
            let myGreet = await greetings.greet(textArea, lang);
            res.render('home', { count: await greetings.greetCount(), greet: myGreet });
        } catch (err) {
            // error
        }
    }

    async function greetedUsers (req, res) {
        try {
            res.render('greeted', {
                users: await greetings.greetedUsers()
            });
        } catch (err) {
            // err
        }
    }

    async function counted (req, res) {
        try {
            res.render('home', { count: await greetings.greetCount() });
        } catch (err) {
            // err
        }
    }

    async function clear (req, res) {
        try {
            res.render('home', { clear: await greetings.clearValues(),
                count: await greetings.greetCount() }
            );
        } catch (err) {
            // err
        }
    }

    async function home (req, res) {
        try {
            res.render('home', { count: await greetings.greetCount() }
            );
        } catch (err) {
            // err
        }
    }
    async function name (req, res) {
        let newName = req.params.user_name;
        let person = await greetings.getNames(newName);
        let users = person[0].counter;
        res.render('count', { counter: users, user_name: newName });
    }

    return {
        name,
        toGreet,
        greetedUsers,
        counted,
        clear,
        home
    };
}
;