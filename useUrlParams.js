const urlParamHook = require('./urlParamHook')

const defaultGetPath = () => {
	// strip origin from url
	const fullUrl = window.location.href
	const urlPath = fullUrl.replace(window.location.origin, '')

	const [urlWithoutHash, hash] = urlPath.split('#')

	// check if the url has a parameter (so we can determine how to re-add the hash)
	const urlHasParam = urlWithoutHash.includes('?')
	const hashParameter = hash !== undefined ? (urlHasParam ? `&hash=${hash}` : `?hash=${hash}`) : ''

	// return the complete url with hash-fragment as query param
	// e.g. tram-one.io#features => tram-one.io?hash=features
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
 * routing in javascript.https://github.com/Tram-One/useUrlParams/pull/9
 *
 * @param {String} [pattern] path for resolving path parameters (not required for query params)
 *
 * @returns {Object} object with a `matches` key, and (if it matched) path and query parameters
 */
module.exports = urlParamHook(defaultGetPath)
