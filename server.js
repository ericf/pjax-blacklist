var express = require('express'),
    exphbs  = require('express3-handlebars'),

    app = express();

app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');
app.enable('strict routing');

app.use(app.router);
app.use(express.static('./public'));

function render (view) {
    return function (req, res) {
        res.render(view);
    };
}

app.get('/',     render('home'));
app.get('/foo/', render('foo'));
app.get('/bar/', render('bar'));

app.listen(3000);
