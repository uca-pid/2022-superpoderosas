import { useFrequency } from  '../../../Context/FrequencyContext'
import { useState, useEffect } from 'react'
import { useAmount } from '../../../Context/AmountContext'
import { useSubscriptionPeriod } from '../../../Context/SubscriptionContext'

const StartDonation = ({ setStep }) => {
  const { selectedFrequency } = useFrequency();
  const {selectedAmount} = useAmount();
  const { paymentDay} = useSubscriptionPeriod();
  const [message, setMessage] = useState("");

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
      alert("se realizo la donación");
      /*AuthService.login(email, password).then(
        () => {
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