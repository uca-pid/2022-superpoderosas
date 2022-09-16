import "../NavBar/navBar.css"
import "../../App.css"
import "../../Pages/Registration-Autentification.js/IntroductionPage.css"
import SolidButton from "./Butttons"

const Modal = (props) =>{
    function closeModal(event) {
        props.onChange(event.target.userWantsToRegister);
    }
    return(
        <>
          <div
            className="backdrop justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl p-10">
              {/*content*/}
              <div className="  space-y-9 p-12 rounded-lg relative flex flex-col w-auto bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between rounded-t">
                  <h3 className="modalTitle">
                    {props.header}
                  </h3>
                </div>
                {/*body*/}
                <div className="relative flex-auto">
                  <p className="leading-relaxed modalText">
                   {props.body}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end">
                  <SolidButton text={props.buttonText} color={"greenBg"} margins={"mr-1 mb-1"} onClick={closeModal}></SolidButton>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}

export default Modal;