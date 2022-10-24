import React from "react";
import "../../../App.css"
import Amounts from './Amounts'
import { useState } from 'react'
import DashedLine from '../../Utiles/DashedLine'
import { useAmount } from  '../../../Context/AmountContext'
import {useSubscriptionPeriod} from  '../../../Context/SubscriptionContext'
import SelectSubscriptionPeriod from './SelectSubscriptionPeriod'
import SelectPaymentDay from './SelectPaymentDay'
import { useSubModContext } from "../../../Context/SubscriptionModificationContext";
import Buttons from "../../Utiles/Butttons";
import { useCurrentUser } from "../../../Context/CurrentUserContext";
import DonationService from "../../../services/donations.service";
import ModalWithConfirmationAndDetails from "../../Utiles/ModalWithConfirmationAndDetails";
import Modal from "../../Utiles/Modal";
import SubscriptionAmountImpactMessage from "./SubscriptionAmountImpactMessage";
import SubscriptionImpactForSelectedAmount from "./SubscriptionImpactForSelectedAmount";
import Messages from "../Messages";

const ChangeDonationFromProfileForm = (props) =>{
  const {userWantsToModifySubs, setIfUserWantsToModifySubs} = useSubModContext();
  const {subscriptionData} = useCurrentUser();
  const [showModalWithConfirmation, setShowModalWithConfirmation] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { selectedAmount} = useAmount()
  const { subsPeriod, paymentDay} = useSubscriptionPeriod()
  const [message, setMessage] = useState("");
  console.log(paymentDay);

  const closeModalWithConfirmation = () => {
    setShowModalWithConfirmation(false);
  };

  const closeModal = () => {
    setShowModal(false);
    window.location.reload();
  };

  const handleResetDonation = () =>{
    DonationService.modifySubscriptionState(subscriptionData.id, 'A').then(
        () => {
          setShowModal(true);
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
      DonationService.modifySubscription(subscriptionData.id, selectedAmount, parseInt(subsPeriod.value), paymentDay.format('YYYY-MM-DD')).then(
        () => {
          setShowModal(true);
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
    } 
  };

  return(
    <>
    {showModalWithConfirmation ? (
      <ModalWithConfirmationAndDetails 
      value={showModalWithConfirmation} 
      onChange={closeModalWithConfirmation} 
      header={(subscriptionData.subscriptionState.state !== 'P') ?
      "¿Estás seguro de que deseas modificar tu donación recurrente?"  :  "¿Estás seguro de que deseas renaudar tu donación recurrente?"
          } 
      body={(subscriptionData.subscriptionState.state !== 'P') ? "Si guardas los cambios, tu donación actual se modificará."
              :   "Si guardas los cambios, tu donación recurrente se renaudará."} 
      saveChanges={(subscriptionData.subscriptionState.state !== 'P') ? modifyDonation : handleResetDonation}
      action= {(subscriptionData.subscriptionState.state !== 'P') ? "modificará" : "renaudará"}></ModalWithConfirmationAndDetails>
    ) : null}
    {showModal ? (
      <Modal value={showModal} onChange={closeModal} header={(subscriptionData.subscriptionState.state !== 'P') ?
      "Tu donación ha sido modificada con éxito!"  :  "Tu donación ha sido activada con éxito!"
          }body={""} buttonText={"Continuar"}></Modal>
    ) : null}
    <div className="p-8 md:p-11 lg:p-11">
    <div className='flex flex-col space-y-8 md:space-y-6'>
      <Amounts></Amounts>
      <SubscriptionImpactForSelectedAmount></SubscriptionImpactForSelectedAmount>
      <DashedLine></DashedLine>
      <div className='space-y-6'>
        <SelectSubscriptionPeriod></SelectSubscriptionPeriod>
        <SelectPaymentDay></SelectPaymentDay>
      </div>
      {message && (
        <Messages.ErrorMessage message={message}/>
        )}
      {userWantsToModifySubs ?
      <div className="flex flex-col justify-between space-y-8 w-full md:space-y-6">
        <DashedLine></DashedLine>
        <SubscriptionAmountImpactMessage></SubscriptionAmountImpactMessage>
        <div className="flex flex-row justify-between space-x-6 w-full">
        <Buttons.IndicationButton text={"Cancelar"} onClick={()=>{setIfUserWantsToModifySubs(false); setMessage("")}} customStyle={"w-full basis-1/2 text-gray-500 greyBg w-full text-gray-500 hover:bg-gray-300 focus:bg-gray-300 "}></Buttons.IndicationButton>
        <Buttons.IndicationButton  text={"Modificar"} customStyle={"basis-1/2 text-white greenBg yellowBgHover w-full"} onClick={()=>{setShowModalWithConfirmation(true)}}></Buttons.IndicationButton>
        </div>
      </div>
      :
        ((subscriptionData.subscriptionState.state !== 'P') ?
        <Buttons.IndicationButton  text={"Modificar Donación"} customStyle={"w-full text-white greenBg yellowBgHover "} onClick={()=>setIfUserWantsToModifySubs(true)}></Buttons.IndicationButton>
        :
        <>
        <div className="flex flex-col space-y-6">
          <Buttons.IndicationButton  text={"Renaudar Donación"} customStyle={"w-full text-white greenBg yellowBgHover "} onClick={()=>{setShowModalWithConfirmation(true)}}></Buttons.IndicationButton>
          <div className="font-Pop-R text-lg text-gray-400 basis-1/2" >Su donación se encuentra pausada, esto significa que no se realizará ninguna pago hasta que usted reactive su subscripión </div> 
        </div>
        </>
        )}
     
    </div>
    </div>
    </>
  );
}

export default ChangeDonationFromProfileForm;