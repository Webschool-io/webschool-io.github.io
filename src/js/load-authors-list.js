
;(($, webschool, window, undefined) => {

  const loadListAuthors = {
    name: 'loadListAuthors',
    method () {
      webschool.$ajax(res => {
        let authors = res.map(post => post.author)

        authors.forEach(author => {
          webschool.$ajax(res => {
            // Set photo
            $(`#${author}>.author-photo`).css('background-image', `url('${res.avatar_url}')`)

            // Set name
            $(`#${author}>.author-header>.author-name`).text(res.name)

            // Set description
            if ($(`#${author}>.author-header>.author-description`).text() === '') $(`#${author}>.author-header>.author-description`).text(res.bio)

          }, 'GET', `https://api.github.com/users/${author}`)
        })
      })
    }
  }

  webschool.$inject(loadListAuthors)

})(Zepto, webschool, window)
