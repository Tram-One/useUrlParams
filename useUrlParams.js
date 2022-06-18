const urlParamHook = require('./urlParamHook')

const defaultGetPath = () => {
	// extract hash as a parameter
	const originalUrl = window.location.href.replace(window.location.origin, '')
	const [urlWithoutHash, hash] = originalUrl.split('#')
	const urlHasParam = urlWithoutHash.includes('?')
	const hashParameter = hash !== undefined ? (urlHasParam ? `&hash=${hash}` : `?hash=${hash}`) : ''
	const urlWithHashAsParam = `${urlWithoutHash}${hashParameter}`
	return urlWithHashAsParam
}

/**
 * @see https://tram-one.io/#use-url-params
 *
 * @description
 * Hook that returns path variables based on the route.
 * Can return path parameters, query params, and more.
 * It's internal functionality is powered by the package
 * {@link https://www.npmjs.com/package/rlite-router | rlite}
 *
 * Rather than using XML templates to define routes, this method enables
 * routing in javascript.
 *
 * @param {String} [pattern] path for resolving path parameters (not required for query params)
 *
 * @returns {Object} object with a `matches` key, and (if it matched) path and query parameters
 */
module.exports = urlParamHook(defaultGetPath)
