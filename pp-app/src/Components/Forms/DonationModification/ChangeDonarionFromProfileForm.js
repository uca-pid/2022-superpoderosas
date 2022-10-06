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
import { useCurrentUser } from "../../../Context/CurrentUserContext";
import DonationService from "../../../services/donations.service";

const ChangeDonationFromProfileForm = (props) =>{
  const {userWantsToModifySubs, setIfUserWantsToModifySubs} = useSubModContext();
  const {subscriptionData} = useCurrentUser();
  const handleResetDonation = () =>{
    DonationService.modifySubscriptionState(subscriptionData.id, 'A').then(
        () => {
          alert("Se reactivo");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          console.log(resMessage);
        })
}
  return(
    <div className="p-8 md:p-11 lg:p-11">
    <FrequencyContextProvider>
    <AmountContextProvider>
    <div className='flex flex-col space-y-8 md:space-y-6'>
      <Amounts></Amounts>
      <DashedLine></DashedLine>
      <div className='space-y-6'>
        <SubscriptionContextProvider>
        <SelectSubscriptionPeriod></SelectSubscriptionPeriod>
        <SelectPaymentDay></SelectPaymentDay>
        </SubscriptionContextProvider> 
      </div>
      {userWantsToModifySubs ?
      <div className="flex flex-row justify-between space-x-6 w-full">
        <Buttons.IndicationButton text={"Cancelar"} onClick={()=>setIfUserWantsToModifySubs(false)} customStyle={"w-full basis-1/2 text-gray-500 greyBg w-full text-gray-500 hover:bg-gray-300 focus:bg-gray-300 "}></Buttons.IndicationButton>
        <Buttons.IndicationButton  text={"Modificar"} customStyle={"basis-1/2 text-white greenBg yellowBgHover w-full"} onClick={()=>{setIfUserWantsToModifySubs(false)}}></Buttons.IndicationButton>
      </div>
      :
        ((subscriptionData.state !== 'P') ?
        <Buttons.IndicationButton  text={"Modificar Donación"} customStyle={"w-full text-white greenBg yellowBgHover "} onClick={()=>setIfUserWantsToModifySubs(true)}></Buttons.IndicationButton>
        :
        <>
        <div className="flex flex-col space-y-6">
          <Buttons.IndicationButton  text={"Renaudar Donación"} customStyle={"w-full text-white greenBg yellowBgHover "} onClick={handleResetDonation}></Buttons.IndicationButton>
          <div className="font-Pop-R text-lg text-gray-400 basis-1/2" >Su donación se encuentra pausada, esto significa que no se realizará ninguna pago hasta que usted reactive su subscripión </div> 
        </div>
        </>
        )}
     
    </div>
    </AmountContextProvider>
    </FrequencyContextProvider>
    </div>
  );
}

export default ChangeDonationFromProfileForm;