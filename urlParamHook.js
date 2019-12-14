const rlite = require('rlite-router')

const onNonMatchingPath = () => false
const returnParams = params => params

module.exports = (getPath) => (pattern = '*') => rlite(onNonMatchingPath, { [pattern]: returnParams })(getPath())

