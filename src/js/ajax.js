
;(($, window, undefined) => {

  const Ajax = {
    name: '$ajax',
    /**
     * Ajax
     * @param {Function} success
     * @param {String} method
     * @param {String} url
     */
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
