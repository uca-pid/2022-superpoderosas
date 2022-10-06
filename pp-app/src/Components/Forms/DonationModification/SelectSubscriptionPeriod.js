import subscriptionPeriod from "../../../Values/subscriptionPeriod"
import {useSubscriptionPeriod} from  '../../../Context/SubscriptionContext'
import Select from 'react-select';
import { useSubModContext } from "../../../Context/SubscriptionModificationContext";
import { useEffect } from "react";
import { useCurrentUser } from "../../../Context/CurrentUserContext";

const SelectSubscriptionPeriod = ( ) => {
  const { subsPeriod, setSubsPeriod} = useSubscriptionPeriod()
  const {userWantsToModifySubs} = useSubModContext()
  const {subscriptionData} = useCurrentUser()
  const onChangeSubsPeriod = (e) => {
    setSubsPeriod(e);
  };

  useEffect(() => {
    const currentperiod = subscriptionPeriod.find(period => period.value === (subscriptionData.frequency).toString());
    setSubsPeriod(currentperiod);
  },[])

  const colourStyles = {
    control: (base, state) => ({
      ...base,
      background: "white",
      backgroundColor: "white",
      '&:hover': { borderColor: '#D1D5DB' }, 
            border: '1px solid #D1D5DB', 
            boxShadow: 'none', 
  }),
    option: (styles, { data, isDisabled, isFocused, isSelected}) => {
      return {
        ...styles,
        color: isSelected ? "#eb8301" : 'gray',
      backgroundColor: isDisabled
        ? "white"
        : isSelected
        ? "#f5f8f2"
        : isFocused
        ? "#f5f8f2"
        : "white",
      padding: 10,
      cursor: isDisabled ? 'not-allowed' : 'default',
      
      };
    },
    placeholder: (styles) => ({ ...styles}),
    singleValue:(styles, { data }) => ({
      ...styles,
      color: "#6c3333",
      padding: 10,
      borders: "red",
    }),
  };
  
    return (
      <>
      {userWantsToModifySubs ? 
      <div className="space-y-4">
      <div className="font-Pop-R text-lg text-gray-400">¿Cada cuanto desea donar?</div>
        <div className="flex flex-row">
          <Select className="md:basis-1/2 border-gray-300 relative bg-transparent h-auto w-full placeholder-gray-600 focus:z-10 font-Pop-M tracking-[0.5px] text-lg focus:outline-none greenBorderWhenFocus form-control" styles={colourStyles} 
                  options={subscriptionPeriod}
                  value={subsPeriod} 
                  placeholder="Seleccione la frecuencia de pago"
                  onChange={onChangeSubsPeriod}
                  isSearchable={false}/>
        </div>
      </div>
      :
      <div className="flex flex-row md:space-x-6">
         <div className="font-Pop-R text-lg text-gray-400 basis-1/2" >Usted realiza una donación: </div> 
         <div className="font-Pop-M text-lg md:text-xl purpleText basis-1/2 text-end" >{subsPeriod.label}</div>
      </div>
      }
      </>
    )
  }
  
  export default SelectSubscriptionPeriod