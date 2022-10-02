import React from "react";
import "../../../App.css"
import { AmountContextProvider } from  '../../../Context/AmountContext'
import Amounts from './Amounts'
import DashedLine from '../../Utiles/DashedLine'
import SelectSubscriptionPeriod from './SelectSubscriptionPeriod'
import SelectPaymentDay from './SelectPaymentDay'
import { FrequencyContextProvider } from "../../../Context/FrequencyContext";
import { SubscriptionContextProvider } from "../../../Context/SubscriptionContext";
import { useSubModContext } from "../../../Context/SubscriptionModificationContext";
import Buttons from "../../Utiles/Butttons";

const ChangeDonationFromProfileForm = (props) =>{
  const {userWantsToModifySubs, setIfUserWantsToModifySubs} = useSubModContext()
  return(
    <div className="p-11">
    <FrequencyContextProvider>
    <AmountContextProvider>
    <div className='flex flex-col space-y-6'>
      <Amounts></Amounts>
      <DashedLine></DashedLine>
      <div className='space-y-6'>
        <SubscriptionContextProvider>
        <SelectSubscriptionPeriod></SelectSubscriptionPeriod>
        <SelectPaymentDay></SelectPaymentDay>
        </SubscriptionContextProvider> 
      </div>
      {userWantsToModifySubs ?
        <Buttons.IndicationButton text={"Cancelar"} onClick={()=>setIfUserWantsToModifySubs(false)} customStyle={" text-gray-500 greyBg w-full text-gray-500 hover:bg-gray-300 focus:bg-gray-300 "}></Buttons.IndicationButton>
      :
        <Buttons.IndicationButton  text={"Modificar Donación"} customStyle={"w-full text-white greenBg yellowBgHover "} onClick={()=>setIfUserWantsToModifySubs(true)}></Buttons.IndicationButton>
      }
     
    </div>
    </AmountContextProvider>
    </FrequencyContextProvider>
    </div>
  );
}

export default ChangeDonationFromProfileForm;