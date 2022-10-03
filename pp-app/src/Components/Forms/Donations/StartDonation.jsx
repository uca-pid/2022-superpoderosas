import { useFrequency } from  '../../../Context/FrequencyContext'
import { useState, useEffect } from 'react'
import { useAmount } from '../../../Context/AmountContext'
import { useSubscriptionPeriod } from '../../../Context/SubscriptionContext'
import DonationService from '../../../services/donations.service'
import AuthService from '../../../services/auth.service'

const StartDonation = ({ setStep }) => {
  const { selectedFrequency } = useFrequency();
  const {selectedAmount} = useAmount();
  const { paymentDay, subsPeriod} = useSubscriptionPeriod();
  const [message, setMessage] = useState("");
  const currentUser = AuthService.getCurrentUser();

  useEffect(() => {
    setMessage("");
  }, [selectedFrequency])

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
      DonationService.generateSubscription(currentUser.id, selectedAmount, selectedFrequency, subsPeriod.value, null, paymentDay).then(
        () => {
          alert("Se Creo la Subcripción")
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
        }
        DonationService.generateTransaction(currentUser.id, selectedAmount, paymentDay, selectedFrequency).then(
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
      );
    } 
  };

  return (
    <>
      <button onClick={submitDonation}
        className="rounded-xl p-4 h-auto w-full text-center greenBg yellowBgHover font-Pop-SB text-xl md:text-2xl text-white">
        {(selectedFrequency === 1)  ? "Donar" : "Donar Mensualmente"}
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