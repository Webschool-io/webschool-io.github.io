
;(($, window, undefined) => {

  const services = [
    {
      name: '$ajax',
      method (success, method='GET', url='/search.json') {
        $.ajax({
          url,
          method,
          dataType: 'json',
          success,
          error: err => new Error(err)
        })
      }
    }
  ]

  webschool.$inject(services)

})(Zepto, window)
