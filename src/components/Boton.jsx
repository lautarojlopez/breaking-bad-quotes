import {useEffect} from 'react'

function Boton({setFrase}) {

  const consulta = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const frase = await api.json()
    setFrase(frase[0])
  }

  useEffect( () => {
    consulta()
  }, [])

  return(
    <button
      onClick={consulta}
      type="button"
      className="p-3 border-2 border-black transition-all ease-linear duration-200 bg-lime-700 hover:bg-amber-500 w-10/12 md:w-8/12 lg:w-3/12"
      >Nueva Frase</button>
  )

}

export default Boton
