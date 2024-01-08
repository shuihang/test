'use strict'

/** mongodb **/
// const mongodbUrl = 'mongodb://root:admin123@localhost:27017/cjx-cli'
const user = 'root'
const password = 'cjx6Ufg8UFoQRtBMx'
const mongodbUrl = 'mongodb://root:cjx6Ufg8UFoQRtBMx@39.100.76.235:27017/cjx-cli'
// const mongodbUrl = 'mongodb://root:cjx6Ufg8UFoQRtBMx@127.0.0.1:27017/cjx-cli'

// 数据库名称
const mongodbDbName = 'cjx-cli'

module.exports = {
  mongodbUrl,
  mongodbDbName,
}
