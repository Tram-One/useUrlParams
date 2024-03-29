const useUrlParams = require('./useUrlParams')

describe('useUrlParams', () => {
  describe('with default getPath function', () => {
    it('should match with matching path from function', () => {
			window.history.pushState({}, '', 'http://localhost/fake-id/list')

      const params = useUrlParams('/:account/list')
      expect(params).toEqual(
        expect.objectContaining({ account: 'fake-id' })
      )
    })

    it('should not match with non-matching path from function', () => {
			window.history.pushState({}, '', 'http://localhost/fake-id/list')

      const params = useUrlParams('/:account/page')
      expect(params).toEqual({ matches: false })
    })

    it('should match with matching path with no variables from function', () => {
			window.history.pushState({}, '', 'http://localhost/list')

      const params = useUrlParams('/list')
      expect(params).toEqual({ matches: true })
    })

    it('should return variables with no provided path', () => {
			window.history.pushState({}, '', 'http://localhost/list?id=3110')

      const params = useUrlParams()
      expect(params).toEqual(
        expect.objectContaining({ id: '3110' })
      )
    })

    it('should not match with non-matching path with no variables from function', () => {
			window.history.pushState({}, '', 'http://localhost/list')

      const params = useUrlParams('/page')
      expect(params).toEqual({ matches: false })
    })

    it('should match with path and hash', () => {
			window.history.pushState({}, '', 'http://localhost/list#heading')

      const params = useUrlParams('/list')
      expect(params).toEqual({ matches: true, hash: 'heading' })
    })

    it('should return hash variable and search variables', () => {
			window.history.pushState({}, '', 'http://localhost/list?test=2#link')

      const params = useUrlParams()
      expect(params).toEqual(expect.objectContaining({ test: '2', hash: 'link' }))
    })
  })
})
