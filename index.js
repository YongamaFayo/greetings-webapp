const express = require('express');
const exphbs = require('express-handlebars');
const Greetings = require('./greetings');
const bodyParser = require('body-parser');
const { settings } = require('cluster');


const app = express();
const greetings = Greetings();

app.engine('handlebars', exphbs({ defaultLayout: 'main', layoutsDir: './views/layouts' }));
app.set('view engine', 'handlebars');


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(express.static('public'))

const pg = require("pg");
const Pool = pg.Pool

const connectionString = process.env.DATABASE_URL || 'postgresql://yongama:total#90@localhost:5432/greetings';

const pool = new Pool({
	connectionString
});



app.get('/', function (req, res) {
    res.render('index', {



    });

});

app.post('/', function (req, res) {

    // console.log(req.body)

    const { name, language } = req.body;
    greetings.setName(name)

    res.render('index', {
        message: greetings.choice(language, name),
        counter: greetings.counter()

    })

})


app.post('/action ', function (req, res) {

    greetings.choice(req.body.actionType)

    res.redirect('/')

})

app.get('/greeted', function (req, res) {

    res.render('greeted', {

        names: greetings.namesGreeted(),



    })



});



app.get('/counter/:counter', function (req, res) {

    const name = req.params.counter;


    res.render('hello', {
        name,
        count: greetings.userCounter(name)
    });

})
// app.get('/clear', function (req, res) {

//     greetings.clear(),
//         res.render('index', {



//         });

// });
app.get('/reset', function (req, res) {

    greetings.reset(),
        res.render('index', {



        });


app.get('/nameInsterted', function (req, res) {

    greetings.noName(),
        res.render('index', {



        });
    })

});
const PORT = process.env.PORT || 3015;

app.listen(PORT, function () {
    console.log("App started at port:", PORT)
})
