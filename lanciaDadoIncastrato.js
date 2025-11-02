//Crea la funzione lanciaDado() che restituisce una Promise che, 
// dopo 3 secondi, genera un numero casuale tra 1 e 6. 
// Tuttavia, nel 20% dei casi, il dado si "incastra" e la 
// Promise va in reject.

const lanciaDado = () => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const numeroCasuale = Math.floor(Math.random() * 6) + 1;
      const fallito = Math.floor(Math.random() * 6) + 1;
      if (fallito === 1) {
        return reject("Il tuo dado si è incastrato!")
      }
      return resolve(`${numeroCasuale}`)

    }, 3000)
  })
}

const creaLanciaDado = () => {
  let ultimonumero = 0

  return function lanciaDado() {
    return new Promise((resolve, reject) => {

      setTimeout(() => {


        const precedente = ultimonumero;
        const numeroCasuale = Math.floor(Math.random() * 6) + 1;
        const message = precedente === numeroCasuale
          ? `Waw due volte ${numeroCasuale} incredibile!`
          : numeroCasuale;
        ultimonumero = numeroCasuale;
        const fallito = Math.floor(Math.random() * 6) + 1;
        if (fallito === 1) {
          return reject("Il tuo dado si è incastrato!")
        }

        return resolve(`${message}`)

      }, 3000)
    })
  }


}

const lanciaConMemoria = creaLanciaDado();
lanciaConMemoria()
  .then(ris => console.log(`Risultato: ${ris}`))
  .catch(err => console.log(err))

