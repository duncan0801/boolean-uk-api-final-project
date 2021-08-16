var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fixtureRouter = require('./src/fixtures/routes');
const leagueRouter = require('./src/leagues/routes');
const managerRouter = require('./src/managers/routes');
const playerRouter = require('./src/players/routes');
const teamRouter = require('./src/teams/routes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/fixtures", fixtureRouter)
app.use("/leagues", leagueRouter)
app.use("/managers", managerRouter)
app.use("/players", playerRouter)
app.use("/teams", teamRouter)

app.all("*", (req, res) => {
    res.status(404).json({ msg: "Invalid API path"})
})

module.exports = app;
