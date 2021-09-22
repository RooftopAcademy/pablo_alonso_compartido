async function fetchData(url) {
  const response = await fetch(url)
    .then(res => res.ok ?res :Promise.reject())
    .catch(err => {
      console.error(err)
    })
  if (response === undefined) return undefined
  const data = response.json()
  return data
}

// Thing = Que cosa injectamos;
// Where = Donde lo injectamos;
// Who = Con que funcion injectamos
function injectArrayInDOM(thing, where, who) {
  thing.forEach(item => where.innerHTML += who(item))
}