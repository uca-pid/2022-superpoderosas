import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Popover } from '@headlessui/react';
import DonationService from '../../../services/donations.service';
import { useCurrentUser } from '../../../Context/CurrentUserContext';
import ModalWithConfirmationAndDetails from "../../Utiles/ModalWithConfirmationAndDetails";
import Modal from "../../Utiles/Modal";
import { useState } from 'react'

const ModifyStatePopUp = ( ) => {
    const {subscriptionData} = useCurrentUser()
    const [showModalWithConfirmation, setShowModalWithConfirmation] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [cancellationRequest, setCancellationRequest] = useState(false);

    const closeModalWithConfirmation = () => {
      setShowModalWithConfirmation(false);
    };
  
    const closeModal = () => {
      setShowModal(false);
      setCancellationRequest(false);
      window.location.reload();
    };

    const handleCancelledSubs = () =>{
        DonationService.modifySubscriptionState(subscriptionData.id, 'C').then(
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
    const handlePausedSubs = () =>{
        DonationService.modifySubscriptionState(subscriptionData.id, 'P').then(
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
    return (
      <>
    {showModalWithConfirmation ? (
    <ModalWithConfirmationAndDetails 
    value={showModalWithConfirmation} onChange={closeModalWithConfirmation} header={(!cancellationRequest) ?
      "¿Estás seguro de que deseas pausar tu donación recurrente?"  :  "¿Estás seguro de que deseas cancelar tu donación recurrente?"
          } body={(!cancellationRequest) ? "Si guardas los cambios, tu donación actual se pausará."
              :   "Si guardas los cambios, tu donación recurrente se cancelará."} saveChanges={(!cancellationRequest) ? handlePausedSubs : handleCancelledSubs}
    action={(!cancellationRequest) ? "pausará" : "cancelará"}></ModalWithConfirmationAndDetails>
    ) : null}
    {showModal ? (
      <Modal value={showModal} onChange={closeModal} header={(!cancellationRequest) ?
      "Tu donación ha sido pausada con éxito!"  :  "Tu donación ha sido cancelada con éxito!"
          }body={""} buttonText={"Continuar"}></Modal>
    ) : null}
        <Popover>
            <Popover.Button className="justify-self-end lightgreyBgTranslucentHover rounded-3xl md:rounded-xl lg:basis-2/7 w-fit py-2 px-5">
            <div className="justify-center flex z-50 space-x-4 overflow-hidden mx-auto lg:flex-row">
                <FontAwesomeIcon icon={faEllipsisV} />
            </div>
            </Popover.Button>
            <Popover.Panel className={"absolute mt-4 p-3 rounded-lg almostWhiteBg grayBorder space-y-2"}>
                <div className="space-y-2">
                <button onClick={()=>{setCancellationRequest(true);setShowModalWithConfirmation(true)}} className='w-full text-left z-50 relative font-Pop-M text-gray-400 duration-700 hover:text-gray-500 focus:text-gray-500 tracking-[0.5px] grayBottomBorder block px-1 py-2 text-base '>
                    Cancelar Subscripción
                </button>
                {(subscriptionData.subscriptionState.state !== 'P') ?
                <button onClick={()=>{setShowModalWithConfirmation(true)}} className='w-full text-left z-50 relative font-Pop-M text-gray-400 duration-700 hover:text-gray-500 focus:text-gray-500 font-Pop-M tracking-[0.5px] block px-1 py-2 text-base'>
                    Pausar Subscripción
                </button>
                : null
                }
                </div> 
            </Popover.Panel>
        </Popover>
      </>
    )
  }
  
  export default ModifyStatePopUp;