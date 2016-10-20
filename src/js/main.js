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

    handleRoutes () {
      webschool.Router(window.location.pathname, this.loadAuthors, /\/blog\//)
      webschool.Router(window.location.pathname, this.loadAuthors, /(\/blog\/)+.+/)
    },
    // Load author
    loadAuthors () {
      webschool.$ajax(res => {
        let authors = res.map(post => post.author)

        authors.forEach(author => {
          webschool.$ajax(res => {

            // Set name
            $(`#${author}>.post-author-name`).text(res.name)
            // Set photo
            $(`#${author}>.post-author-photo`).css('background-image', `url('${res.avatar_url}')`)

          }, 'GET', `https://api.github.com/users/${author}`)
        })
      })
    }
  }

  App.init()
})(Zepto, webschool, window)
