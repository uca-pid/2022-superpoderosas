import React from "react";
import "../../../App.css"
import { AmountContextProvider } from  '../../../Context/AmountContext'
import Amounts from './Amounts'
import { useState, useEffect } from 'react'
import AuthService from '../../../services/auth.service'
import DashedLine from '../../Utiles/DashedLine'
import { useAmount } from  '../../../Context/AmountContext'
import {useSubscriptionPeriod} from  '../../../Context/SubscriptionContext'

import SelectSubscriptionPeriod from './SelectSubscriptionPeriod'
import SelectPaymentDay from './SelectPaymentDay'
import { useSubModContext } from "../../../Context/SubscriptionModificationContext";
import Buttons from "../../Utiles/Butttons";
import DonationService from '../../../services/donations.service'

const ChangeDonationFromProfileForm = (props) =>{
  const {userWantsToModifySubs, setIfUserWantsToModifySubs} = useSubModContext()
  const currentUser = AuthService.getCurrentUser();
  const { selectedAmount} = useAmount()
  const { subsPeriod, paymentDay} = useSubscriptionPeriod()
  const [message, setMessage] = useState("");
  
  const isFormValid = () =>{
    if (paymentDay===null || paymentDay=== undefined){
      setMessage("Para realizar una donación recurrente debe ingresar la fecha de pago");
      return false
    }
    if (selectedAmount < 1 || selectedAmount===undefined){
      setMessage("El monto ingresado a donar debe de ser al menos $1");
      return false
    }
    return true
  }

  const modifyDonation = (e) => {
    e.preventDefault();
    setMessage("");
    if (isFormValid()) {
      DonationService.modifySubscription(currentUser.id, selectedAmount, parseInt(subsPeriod.value), paymentDay.format('YYYY-MM-DD')).then(
        () => {
          alert("Se modifico la Subcripción")//poner un modal
          setIfUserWantsToModifySubs(false);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setMessage(resMessage);
        })
        /*DonationService.generateTransaction(currentUser.id, selectedAmount, paymentDay, subsPeriod).then(
          () => {
            alert("Se Creo la trasaccion")
            //navigate("a donde querramos mandar");
            //window.location.reload();
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            setMessage(resMessage);
          }
      );*/
    } 
  };

  return(
    <div className="p-8 md:p-11 lg:p-11">
    <div className='flex flex-col space-y-8 md:space-y-6'>
      <Amounts></Amounts>
      <DashedLine></DashedLine>
      <div className='space-y-6'>
        <SelectSubscriptionPeriod></SelectSubscriptionPeriod>
        <SelectPaymentDay></SelectPaymentDay>
      </div>
      {message && (
        <div className="grid form-group justify-items-center pb-4">
          <div className="alert redText font-Pop-SB alert-danger text-lg justify-items-center" role="alert">
            {message}
          </div>
        </div>
        )}
      {userWantsToModifySubs ?
      <div className="flex flex-row justify-between space-x-6 w-full">
        <Buttons.IndicationButton text={"Cancelar"} onClick={()=>setIfUserWantsToModifySubs(false)} customStyle={"w-full basis-1/2 text-gray-500 greyBg w-full text-gray-500 hover:bg-gray-300 focus:bg-gray-300 "}></Buttons.IndicationButton>
        <Buttons.IndicationButton  text={"Modificar"} customStyle={"basis-1/2 text-white greenBg yellowBgHover w-full"} onClick={modifyDonation}></Buttons.IndicationButton>
      </div>
      :
        <Buttons.IndicationButton  text={"Modificar Donación"} customStyle={"w-full text-white greenBg yellowBgHover "} onClick={()=>setIfUserWantsToModifySubs(true)}></Buttons.IndicationButton>
      }    
    </div>
    </div>
  );
}

export default ChangeDonationFromProfileForm;