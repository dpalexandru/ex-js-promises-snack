//Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link
//  https://dummyjson.com/posts/{id}

const link = "https://dummyjson.com/posts/"


// funzione getPostTitle
const getPostTitle = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`${link}${id}`)
      .then(response => response.json())
      .then(data => resolve(data.title))
      .catch(error => reject("error " + error))

  })
}

//uso la funzione 
getPostTitle(9)
  .then(title => console.log(title))
  .catch(err => console.error(err));