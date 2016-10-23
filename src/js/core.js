
let webschool = (($, window, undefined) => {

  function $inject (...services) {
    services.forEach(service => {
      this[service.name] = service.method
    })
  }

  return {
    $inject
  }
})(Zepto, window)
