/* =======================================================
 *
 * @anele_ace
 *
 * =======================================================
 */

var express         = require('express'),
    path            = require('path'),
    bodyParser      = require('body-parser'),
    cors            = require('cors'),
    methodOverride  = require('method-override');

var corsOptions = { origin: '*', optionsSuccessStatus: 200 };


/*
 |--------------------------------------
 | Route Registration
 |--------------------------------------
 */

var testRoute = require('./server/routes/test'),
    musicRoute = require('./server/routes/music'),
    searchRoute = require('./server/routes/search');


/*
 |--------------------------------------
 | App
 |--------------------------------------
 */


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

if (process.env.NODE_ENV !== 'dev') {
    app.use('/', express.static(path.join(__dirname, './dist')));
}

app.use('/test', testRoute);
app.use('/music', musicRoute);
app.use('/search', searchRoute);

app.get('/developer', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.json({
        name  : 'Anele "ace" M ',
        email     : 'anele@acedesigns.co.za',
        twitter     : '@anele_ace'
    });
});

app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.json({
        name  : 'Anele "ace" M ',
        country : "South Africa",
        email     : 'anele@acedesigns.co.za',
        twitter     : '@anele_ace'
    });
});

app.listen( process.env.PORT || 8083, function () {
    console.log('Server running on localhost:8083');
});

