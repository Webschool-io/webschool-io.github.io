
;(($, webschool, window, undefined) => {

  const loadListAuthors = {
    name: 'loadListAuthors',
    method () {
      webschool.$ajax(res => {
        const authors = res.map(post => post.author)

        authors.forEach(author => {
          webschool.$ajax(res => {
            const targets = {
              name: $(`#${author}>.author-header>.author-name`),
              photo: $(`#${author}>.author-photo`),
              description: $(`#${author}>.author-header>.author-description`)
            }

              // Set photo
            targets.photo.css('background-image', `url('${res.avatar_url}')`)

              // Set name
            targets.name.text(res.name)

              // Set description
            if (targets.description.text() === '') targets.description.text(res.bio)

          }, 'GET', `https://api.github.com/users/${author}`)
        })
      })
    }
  }

  webschool.$inject(loadListAuthors)

})(Zepto, webschool, window)
