
;(($, window, undefined) => {

  const services = [
    {
      name: 'Router',
      method (url, handler, ...matcheds) {
        matcheds.forEach(matched => (matched.test(url)) ? handler() : -1)
      }
    }
  ]

  webschool.$inject(services)

})(Zepto, window)
