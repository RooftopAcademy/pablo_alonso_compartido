
renderCommentsList()

function renderCommentsList() {
  fetchComment().then(comments => {
    const commentsList = document.getElementById('comments-list')
    if (comments === undefined) return commentsList.innerHTML = `<p>There was an error loading the comments :(</p>`
    comments.forEach(comment => {
      commentsList.innerHTML += commentItem(comment)
    })
  })
}

async function fetchComment() {
  // const URL = 'Foo' // To emulate a bad fetch and test the error message.
  const URL = 'https://jsonplaceholder.typicode.com/users'
  const response = await fetch(URL)
    .then(res => res.ok ?res :undefined)
    .catch(err => {
      console.error(err)
      return undefined
    })
  if (response === undefined) return undefined
  const data = response.json()
  return data
}