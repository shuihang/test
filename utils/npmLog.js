const log = require('npmlog')

log.level = process.env.LOG_LEVEL ? process.env.LOG_LEVEL : 'info'
log.heading = 'CJX' // 修改前缀
log.addLevel('success', 2000, { fg: 'green', bold: true })
log.addLevel('verbose', 1000, { fg: 'cyan', bg: 'white' }, 'verb')

module.exports = log
