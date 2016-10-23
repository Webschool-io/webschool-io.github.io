;(($, webschool, window, undefined) => {


  let App = {

    // Start everything
    init () {
      this.toggleMenu()
      this.handleRoutes()
    },

    // Menu toggle
    toggleMenu () {
      $('.header-nav-menu').on('click', evt => {
        $('.wrapper').toggleClass('show')
      })
    },

    // To deal with a sigle script
    handleRoutes () {
      webschool.Router(window.location.pathname, webschool.loadAuthors, /\/blog\/$/)
      webschool.Router(window.location.pathname, webschool.loadAuthors, /\/blog\/+.+/)
      webschool.Router(window.location.pathname, webschool.loadListAuthors, /\/authors/)
    },

  }

  App.init()
})(Zepto, webschool, window)
