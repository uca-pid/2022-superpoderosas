import Tabs from './Tabs'
import CardForm from './CardForm'
import MPagoForm from './MPagoForm.jsx'
const SecondStep = () => {
  return (
    <>
      <Tabs>
        {[
          <CardForm className='h-80' key="0"/>,
          <MPagoForm className='h-80' key="1"/>
        ]}
      </Tabs>
    </>
  )
}

export default SecondStep