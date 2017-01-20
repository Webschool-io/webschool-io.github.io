
;(($, window, undefined) => {

  // TODO: Handler more than one function on URL match
  const Router = {
    name: 'Router',
    /**
     * Match URL with the current URL state
     * @param {String} url
     * @param {Function} handler
     * @param {Array} matcheds
     */
    method (url, handler, ...matcheds) {
      matcheds.forEach(matched => (matched.test(url)) ? handler() : -1)
    }
  }

  webschool.$inject(Router)

})(Zepto, window)
