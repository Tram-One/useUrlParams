## Complete Documentation in Tram-One
https://tram-one.io/api/#Tram-One#useUrlParams

### Description
Hook that returns path variables based on the route.
Can return path parameters, query params, and more.
It's internal functionality is powered by the package
[rlite](https://www.npmjs.com/package/rlite-router)

Rather than using XML templates to define routes, this method enables
routing in javascript using a hook like result.

### Parameters
`{Function} [getPath]` - function to return the current path, defaults to reading window.location.href


`{String} [pattern]` - path for resolving path parameters (not required for query params)

### Returns
`{Object|Boolean}` - object with params if path matches, otherwise returns false

## Examples
Examples are based on it's usage in [Tram-One](https://tram-one.io), however they should work in any view framework.

One caveat is that in the Tram-One examples, we default to assume that useUrlParams will be using the default `getPath`. If you need to define a custom `getPath`, you can use it like so:
### Custom Get Path Example
```javascript
import useUrlParams from 'use-url-params'

const customGetPath = () => window.location.port
export default useUrlParams(customGetPath)
```

Otherwise, you'll want to use the hook with empty parens when calling it

### Default Get Path Example
```javascript
import useUrlParams from 'use-url-params'

const useUrlParamsHook = useUrlParams()
const params = useUrlParamsHook('/hello')

// OR

const params = useUrlParams()('/hello')
```


### Check Route Example
```javascript
import { registerHtml, useUrlParams } from 'tram-one'
import HomePage from './pages/home'
import UserPage from './pages/user'
import NotFoundPage from './pages/not-found'

export default () => {
  if (useUrlParams('/')) return HomePage();
  if (useUrlParams('/user')) return UserPage();
  return NotFoundPage();
}
```

### Get Url Params Example (path is `/user/exampleUser?session=true`)
```javascript
import { registerHtml, useUrlParams } from 'tram-one'


export default () => {
  const params = useUrlParams('/user/:userId')
  params.userId // => exampleUser
  params.session // => true
}
```
