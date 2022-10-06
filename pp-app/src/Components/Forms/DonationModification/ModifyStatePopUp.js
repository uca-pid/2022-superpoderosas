import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Popover } from '@headlessui/react';
import DonationService from '../../../services/donations.service';
import { useCurrentUser } from '../../../Context/CurrentUserContext';

const ModifyStatePopUp = ( ) => {
    const {subscriptionData} = useCurrentUser()

    const handleCancelledSubs = () =>{
        DonationService.modifySubscriptionState(subscriptionData.id, 'C').then(
            () => {
              alert("Se cancelo")
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
    const handlePausedSubs = () =>{
        DonationService.modifySubscriptionState(subscriptionData.id, 'P').then(
            () => {
              alert("Se pauso");
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
    return (
      <>
        <Popover>
            <Popover.Button className="justify-self-end lightgreyBgTranslucentHover rounded-3xl md:rounded-xl lg:basis-2/7 w-fit py-2 px-5">
            <div className="justify-center flex z-50 space-x-4 overflow-hidden mx-auto lg:flex-row">
                <FontAwesomeIcon icon={faEllipsisV} />
            </div>
            </Popover.Button>
            <Popover.Panel className={"absolute mt-4 p-3 rounded-lg almostWhiteBg grayBorder space-y-2"}>
                <div className="space-y-2">
                <button onClick={handleCancelledSubs} className='w-full text-left z-50 relative font-Pop-M text-gray-400 duration-700 hover:text-gray-500 focus:text-gray-500 tracking-[0.5px] grayBottomBorder block px-1 py-2 text-base '>
                    Cancelar Subscripción
                </button>
                {(subscriptionData.subscriptionState.state !== 'P') ?
                <button onClick={handlePausedSubs} className='w-full text-left z-50 relative font-Pop-M text-gray-400 duration-700 hover:text-gray-500 focus:text-gray-500 font-Pop-M tracking-[0.5px] block px-1 py-2 text-base'>
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