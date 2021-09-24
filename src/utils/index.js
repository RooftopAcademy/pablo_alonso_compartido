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

// arr = Que cosa injectamos;
// Where = Donde lo injectamos;
// Who = Con que funcion injectamos
function injectArrayInDOM(arr, where, who) {
  arr.forEach(item => where.innerHTML += who(item))
}

function injectSingleInDOM(thing, where, who) {
  where.innerHTML += who(thing)
}

function differenceDays(timeAgo) {
  const datePast = new Date(timeAgo)
  const dateNow = new Date()

  const difference = Math.abs(dateNow-datePast)
  const daysAgo = Math.ceil(difference/(1000 * 3600 * 24))
  return daysAgo
}