const rlite = require('rlite-router')

const onNonMatchingPath = params => ({matches: false, ...params})
const returnParams = params => ({matches: true, ...params})

module.exports = (getPath) => (pattern = '*') => rlite(onNonMatchingPath, { [pattern]: returnParams })(getPath())
