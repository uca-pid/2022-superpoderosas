import subscriptionPeriod from "../../../Values/subscriptionPeriod"
import Select from 'react-select'
import {useSubscriptionPeriod} from  '../../../Context/SubscriptionContext'

const SelectSubscriptionPeriod = ( ) => {
  const { subsPeriod, setSubsPeriod,} = useSubscriptionPeriod()
  const onChangeFrecuency = (e) => {
    setSubsPeriod(e.target.value);
};
    return (
      <Select className="relative bg-transparent h-12 block w-full py-2 text-gray-900 placeholder-gray-600 focus:z-10 font-Pop-R tracking-[0.5px] text-[12pt] focus:outline-none greenBorderWhenFocus form-control" 
                        options={subscriptionPeriod}
                        value={subsPeriod} 
                        placeholder="Seleccione la frecuencia de pago"
                        onChange={onChangeFrecuency}/>
    )
  }
  
  export default SelectSubscriptionPeriod