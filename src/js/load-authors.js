
;(($, webschool, window, undefined) => {

  const loadAuthors = {
    name: 'loadAuthors',
    method () {
      webschool.$ajax(res => {
        const authors = res.map(post => post.author)

        authors.forEach(author => {
          webschool.$ajax(res => {
            const targets = {
              name: $(`#${author}>.post-author-name`),
              photo: $(`#${author}>.post-author-photo`)
            }

              // Set name
            targets.name.text(res.name)

              // Set photo
            targets.photo.css('background-image', `url('${res.avatar_url}')`)

          }, 'GET', `https://api.github.com/users/${author}`)
        })
      })
    }
  }

  webschool.$inject(loadAuthors)

})(Zepto, webschool, window)
