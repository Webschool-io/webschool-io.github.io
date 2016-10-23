
;(($, window, undefined) => {

  const Router = {
    name: 'Router',
    method (url, handler, ...matcheds) {
      matcheds.forEach(matched => (matched.test(url)) ? handler() : -1)
    }
  }

  webschool.$inject(Router)

})(Zepto, window)
