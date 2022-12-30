async function postsByUser(userId){

const promise = await fetch('https://jsonplaceholder.typicode.com/posts')

const result = await promise.json()

const filterByUserId = result.filter(elem => elem.userId === userId)

console.log(filterByUserId)

}

console.log(postsByUser(4))