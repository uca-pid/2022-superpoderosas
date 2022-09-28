import CardInput from './CardInput'
import DonarButton from './DonarButton'

const submit = () => {
  console.log('prueba')
}

const MPagoForm = () => {
  return (
    <form action="submit">
      <div className="container flex flex-row flex-wrap justify-center">
        <div className="w-full mt-4">
          <CardInput type="email" placeholder="Cuenta de MercadoPago (correo)" id="email" required />
        </div>
        <div className='w-1/2 mt-4'>
          <DonarButton onClick={submit}/>
        </div>
      </div>
    </form>
  )
}

export default MPagoForm
