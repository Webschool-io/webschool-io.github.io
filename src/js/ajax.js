
;(($, window, undefined) => {

  const Ajax = {
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

  webschool.$inject(Ajax)

})(Zepto, window)
