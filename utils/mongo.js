'use strict'

const MongoClient = require('mongodb').MongoClient
const log = require('./npmLog')

class Mongo {
  constructor(url, dbName) {
    this.url = url
    this.dbName = dbName
  }

  connect() {
    return new Promise((resolve, reject) => {
      MongoClient.connect(
        this.url,
        {
          authSource: 'admin', // 权限认证（添加这个属性！！！！！）
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
        (err, client) => {
          if (err) {
            reject(err)
          } else {
            const db = client.db(this.dbName)
            // console.log(222, db)
            resolve({ db, client })
          }
        })
    })
  }

  connectAction(docName, action) {
    return new Promise(async (resolve, reject) => {
      const { db, client } = await this.connect()
      try {
        const collection = db.collection(docName)
        action(collection, result => {
          this.close(client)
          log.verbose('result', result)
          resolve(result)
        }, err => {
          this.close(client)
          log.error(err.toString())
          reject(err)
        })
      } catch (err) {
        this.close(client)
        log.error(err.toString())
        reject(err)
      }
    })
  }

  query(docName) {
    return this.connectAction(docName, (collection, onSuccess, onError) => {
      collection.find({}, { projection: { _id: 0 } }).toArray((err, docs) => {
        if (err) {
          onError(err)
        } else {
          onSuccess(docs)
        }
      })
    })
  }

  insert(docName, data) {
    return this.connectAction(docName, (collection, onSuccess, onError) => {
      collection.insertMany(data, (err, result) => {
        if (err) {
          onError(err)
        } else {
          onSuccess(result)
        }
      })
    })
  }

  remove(docName, data) {
    return this.connectAction(docName, (collection, onSuccess, onError) => {
      collection.deleteOne(data, (err, result) => {
        if (err) {
          onError(err)
        } else {
          onSuccess(result)
        }
      })
    })
  }

  update(collection, data) {
  }

  close(client) {
    client && client.close()
  }
}

module.exports = Mongo
