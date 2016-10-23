
;(($, webschool, window, undefined) => {

  const loadAuthors = {
    name: 'loadAuthors',
    method () {
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

  webschool.$inject(loadAuthors)

})(Zepto, webschool, window)
