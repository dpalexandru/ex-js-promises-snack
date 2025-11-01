const link = "https://dummyjson.com/posts/";

// funzione getPostTitle
const getPostTitle = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`${link}${id}`)
      .then(response => response.json())
      .then(data => resolve(data.title))
      .catch(error => reject("error " + error))

  })
}

const getPost = (id) => {
  return fetch(`${link}${id}`)
    .then(res => res.json())
    .then(post => {
      // rseconda pattch 
      return fetch(`https://dummyjson.com/users/${post.userId}`)
        .then(res => res.json())
        .then(user => ({
          ...post,
          user
        }))
        .catch(error => reject("error " + error))
    })
    .catch(error => reject("error " + error))

};

const id = 11
// uso
getPostTitle(id).then(console.log).catch(console.error);

getPost(id)
  .then(postConUtente => console.log(postConUtente))
  .catch(err => console.error("error:", err));