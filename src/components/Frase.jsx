function Frase({frase}) {

  return(
    <div className="p-5 m-5 border-2 border-black bg-green-800 text-white">
      <blockquote>
        <div className="flex">
          <i className="fas fa-quote-left"></i>
          <h2 className="mx-2">{frase.quote}</h2>
          <i className="fas fa-quote-right"></i>
        </div>
        <div className="flex justify-end">
          <p className="italic">- {frase.author}</p>
        </div>
      </blockquote>
    </div>
  )

}

export default Frase
