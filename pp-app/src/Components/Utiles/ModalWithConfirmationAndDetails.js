import "../NavBars/navBar.css"
import "../../App.css"
import { useAmount } from "../../Context/AmountContext"

import { useSubscriptionPeriod } from "../../Context/SubscriptionContext"
const ModalWithConfirmationAndDetails = (props) =>{
  const { selectedAmount} = useAmount()
  const { subsPeriod, paymentDay} = useSubscriptionPeriod()
    function closeModal(event) {
        props.onChange(event.target.userWantsToRegister);
    }
    function saveChangesFromModal(event) {
      props.saveChanges(event);
      closeModal(event);
    }
    return(
        <>
          <div
            className="darkGreyBg justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl p-16">
              {/*content*/}
              <div className="  space-y-9 p-12 rounded-lg relative flex flex-col w-auto bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between rounded-t">
                  <h3 className="font-Pop-SB text-[20pt] tracking-[0px] purpleText">
                    {props.header}
                  </h3>
                </div>
                {/*body*/}
                <div className="relative flex flex-col space-y-10">
                  {(props.showDetails) ?
                  <>
                    <div className="font-Pop-M flex flex-wrap space-x-1 leading-relaxed font-Pop-R text-[15pt] text-medium tracking-[0.2px] purpleText">
                      <p>Se realizará una donacion de </p>
                      <p className="underline decoration-[#eb8301] decoration-wavy underline-offset-4">${selectedAmount}</p>
                      <p>, </p>
                      <p className="underline decoration-[#eb8301] decoration-wavy underline-offset-4">{subsPeriod.label}</p>
                      <p>todos los días </p>
                       <p className="underline decoration-[#eb8301] decoration-wavy underline-offset-4">{paymentDay}</p>
                       <p>.</p>
                    </div>
                  </>
                  : <></>
                  }
                  <p className="text-center font-Pop-R text-lg text-gray-400">
                   {props.body}
                  </p>
                </div>
                <div className="flex items-center flex-rows justify-between">
                <button onClick={closeModal} className="mx-3 py-3 h-fit px-7 greyBg rounded-xl tracking-widest font-Pop-M uppercase font-medium text-gray-500 duration-700 hover:bg-gray-300 focus:bg-gray-300  hover:text-white focus:text-white text-lg">Cancelar</button>
                <button onClick={saveChangesFromModal} text="Guardar Cambios" className="mx-3 py-3 h-fit px-7 bg-[#0F6938] text-white rounded-xl tracking-widest font-Pop-M uppercase font-medium duration-700 hover:bg-[#6c3333] focus:bg-[#6c3333]  text-lg">Guardar Cambios</button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}

export default ModalWithConfirmationAndDetails;