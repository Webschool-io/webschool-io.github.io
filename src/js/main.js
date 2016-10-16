
let webschool = (($, window, undefined) => {

  function init () {

    toggleMenu()

    // To deal with a single file
    switch (window.location.pathname) {
      case '/blog/':
        loadAuthors()
        return
      default:

    }
  }


  function toggleMenu () {
    $('.header-nav-menu').on('click', evt => {
      $('.wrapper').toggleClass('show')
    })
  }


  function loadAuthors () {

    let targets = []

    Ajax(res => {
      let authors = res.map(post => post.author)

      authors.forEach(author => {
        Ajax(res => {

          // Set name
          $(`#${author}>.post-author-name`).text(res.name)
          // Set photo
          $(`#${author}>.post-author-photo`).css('background-image', `url('${res.avatar_url}')`)
          
        }, 'GET', `https://api.github.com/users/${author}`)
      })
    })

  }

  function Ajax (success, method='GET', url='/search.json') {
    $.ajax({
      url,
      method,
      dataType: 'json',
      success,
      error: err => console.log(new Error(err))
    })
  }


  return {
    init
  }

})(Zepto, window)

;(() => {
  webschool.init()
})()
