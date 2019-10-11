const mongosoose = require('mongoose');
const env = require('../config/env');

mongosoose.connect(env.mongo.url, {useNewUrlParser: true});
mongosoose.Promise = global.Promise;
mongosoose.set('useCreateIndex', true);

const db = mongosoose.connect;

module.exports = db;