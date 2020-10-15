const express = require('express');
const exphbs = require('express-handlebars');
// const Greetings = require('./greetings');
const bodyParser = require('body-parser');
const { settings } = require('cluster');
const Greetings = require('./greetings');
const pg = require("pg");
const Pool = pg.Pool;


const app = express();
const flash = require('express-flash');
const session = require('express-session');

// initialise session middleware - flash-express depends on it
app.use(session({
    secret: "<add a secret string here>",
    resave: false,
    saveUninitialized: true
}));

// initialise the flash middleware
app.use(flash());


const connectionString = process.env.DATABASE_URL || 'postgresql://yongama:pg123@localhost:5432/greetings';
const pool = new Pool({
    connectionString,
    // ssl : useSSL
});
const greetings = Greetings(pool);
app.engine('handlebars', exphbs({ layoutsDir: 'views/layouts/' }));
app.set('view engine', 'handlebars');


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(express.static('public'))





app.get('/', function (req, res) {
    res.render('index', {



    });

});

app.post('/', async function (req, res) {
    
    //const { name, language } = req.body;
    let name = req.body.name;
    let language = req.body.language
    if (name === '' && language === undefined) {

        req.flash('error', 'ENter your name and select a language')

    } else if (name === '') {

        req.flash('error', 'Enter name')

    }
    else if(language === undefined){

        req.flash('error', 'choose a language')
    }
    else if (!(/[a-zA-z]$/.test(name))){
        req.flash('error', 'enter a proper name')
    }
    else{

        await greetings.setName(name)
    }

   




    res.render('index', {
        message: await greetings.choice(language, name),
        counter: await greetings.counter(),
        choice: await greetings.nameCheck()

    })

})


app.post('/action ', function (req, res) {

    greetings.choice(req.body.actionType)

    res.redirect('/')

})

app.get('/greeted', async function (req, res) {


    var inserted = await greetings.namesGreeted()
    console.log(inserted)

    res.render('greeted', {
        names: inserted

    })



});



app.get('/counter/:username', async function (req, res) {

    const name = req.params.username;
    const times = await greetings.userCounter(name);

    console.log(times)
    res.render('hello', {
        name,
        count: times
    });

})

app.get('/reset', async function (req, res) {


    await greetings.reset()

    res.render('index', {

        counter: await greetings.counter()




    });




});
const PORT = process.env.PORT || 3015;

app.listen(PORT, function () {
    console.log("App started at port:", PORT)
})

