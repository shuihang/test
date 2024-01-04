'use strict'

const Mongo = require('./mongo')
const { mongodbUrl, mongodbDbName } = require('../config/db')

function mongodb() {
  return new Mongo(mongodbUrl, mongodbDbName)
}

module.exports = mongodb
