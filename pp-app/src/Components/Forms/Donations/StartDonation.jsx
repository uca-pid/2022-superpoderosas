import { useFrequency } from  '../../../Context/FrequencyContext'
import { useState, useEffect } from 'react'
import { useAmount } from '../../../Context/AmountContext'
import { useSubscriptionPeriod } from '../../../Context/SubscriptionContext'
import DonationService from '../../../services/donations.service'
import AuthService from '../../../services/auth.service'
import Modal from "../../Utiles/Modal";
import { useNavigate } from "react-router-dom"

const StartDonation = ({ setStep }) => {
  const { selectedFrequency } = useFrequency();
  const {selectedAmount} = useAmount();
  const { paymentDay, subsPeriod} = useSubscriptionPeriod();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const currentUser = AuthService.getCurrentUser();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setMessage("");
  }, [selectedFrequency])

  const closeModal = () => {
    setShowModal(false);
    navigate("/profile");
    window.location.reload();
  };

  const isFormValid = () =>{
    if (selectedFrequency === 2 && (paymentDay===null || paymentDay=== undefined)){
      setMessage("Para realizar una donación frecuentemente debe la fecha de pago");
      return false
    }
    if (selectedAmount < 1 || selectedAmount===undefined){
      setMessage("El monto ingresado a donar debe de ser al menos $1");
      return false
    }
    return true
  }

  const submitDonation = (e) => {
    e.preventDefault();
    setMessage("");
    if (isFormValid()) {
      if(selectedFrequency === 2){
        //la subscripció no tiene un tipo, la trasacción unida a la subscripcion debería de tener un tipo?
      DonationService.generateSubscription(currentUser.id, selectedAmount, selectedFrequency, subsPeriod.value, paymentDay.format('YYYY-MM-DD')).then(
        () => {
          setShowModal(true);
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
        })
        }else{
        DonationService.generateTransaction(currentUser.id, selectedAmount,"onlyTime").then(
          () => {
            setShowModal(true);
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
      );
    } 
    }
  };

  return (
    <>
    
    {showModal ? (
      <Modal value={showModal} onChange={closeModal} header={(selectedFrequency === 1) ? "Tu donación ha sido realizada con éxito!" : "Tu suscripción ha sido activada con éxito!"} body={"Muchas gracias por realizar una donación para brindar atención nutricional a niños/as de la comunidad."} buttonText={"Continuar"}></Modal>
    ) : null}
      <button onClick={submitDonation}
        className="rounded-xl p-4 h-auto w-full text-center greenBg yellowBgHover font-Pop-SB text-xl md:text-2xl text-white">
        {(selectedFrequency === 1)  ? "Donar" : "Donar periódicamente"}
      </button>
       {message && (
        <div className="grid form-group justify-items-center pb-4">
          <div className="alert redText font-Pop-SB alert-danger text-lg justify-items-center" role="alert">
            {message}
          </div>
        </div>
        )}
    </>
  )
}

export default StartDonation