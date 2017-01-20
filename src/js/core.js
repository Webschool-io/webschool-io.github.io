
const webschool = (($, window, undefined) => {

  /**
   * Inject method on the Global (webschool)
   * @param  {Array} services
   */
  function $inject (...services) {
    services.forEach(service => {
      this[service.name] = service.method
    })
  }

  return {
    $inject
  }
})(Zepto, window)
