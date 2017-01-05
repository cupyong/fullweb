//加载models
'use strict';
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const Schema = mongoose.Schema;

mongoose.connect(config.db.mongo.url);
mongoose.Promise = bluebird;
const mongodb = mongoose.connection;
mongodb.on('error', console.error.bind(console, 'connection error:'));

let models = {};
let dir = fs.readdirSync(__dirname + '/../../lib/models');
for (let i = 0; i < dir.length; i++) {
    if (path.extname(dir[i]) !== '.js') continue;
    let name = toCamel(path.basename(dir[i], '.js')).replace('Model', '')
    console.log(toUnderLine(name))
    let modelSehema = require(__dirname + '/../../lib/models/' + dir[i])
    let schema = new Schema(modelSehema.model)
    let adminUser = mongoose.model(toUnderLine(name), schema);
    models[toCamel(path.basename(dir[i], '.js'))] = mongoose.model(toUnderLine(name));
}
module.exports = models;

