import CardInput from './CardInput'
import DonarButton from './DonarButton'

const submit = () => {
  console.log('prueba')
}


const CardForm = () => {
  return (
    <div className="container flex flex-row flex-wrap justify-center">
    <div className="w-1/2 mt-4">
      <CardInput type="text" placeholder="Nombre" id="firstname" left required/>
    </div>
    <div className="w-1/2 mt-4">
      <CardInput type="text" placeholder="Apellido" id="lastname" right required/>
    </div>
    <div className="w-3/4 mt-4">
      <CardInput type="text" placeholder="Número de tarjeta" id="cardnumber" left required/>
    </div>
    <div className="w-1/4 mt-4">
      <CardInput type="text" placeholder="MM / AA" id="expireDate" right required/>
    </div>
    <div className='w-1/2 mt-4'>
      <DonarButton onClick={submit}/>
    </div>
  </div>
  )
}

export default CardForm
