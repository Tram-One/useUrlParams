const rlite = require('rlite-router')

/**
 * the default get path, which can be overriden if you want to resolve routes using a different method
 */
const defaultGetPath = () => window.location.href.replace(window.location.origin, '')

/**
 * @see https://tram-one.io/api/#Tram-One#useUrlParams
 * @name useUrlParams
 *
 * @param {function} [getPath] - function to return the current path, defaults to reading window.location.href
 * @returns the useUrlParams hook
 */
module.exports = (getPath = defaultGetPath) => {
  const onNonMatchingPath = () => false
  const returnParams = params => params

  /**
   * @see https://tram-one.io/api/#Tram-One#useUrlParams
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
   * @returns {Object|Boolean} object with params if path matches, otherwise returns false
   */
  const useUrlParamsHook = (pattern = '*') => rlite(onNonMatchingPath, { [pattern]: returnParams })(getPath())

  return useUrlParamsHook
}
