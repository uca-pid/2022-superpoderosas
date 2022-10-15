import React from "react"
import "../../App.css"
import AuthService from "../../services/auth.service";
import ProfileNavBar from "../../Components/NavBars/ProfileNavBar";
import FirstStep from '../../Components/Forms/Donations/FirstStep';
import FrequencySection from '../../Components/Forms/Donations/FrequencySection';
import { FrequencyContextProvider } from '../../Context/FrequencyContext';
import { CurrentUserContextProvider } from '../../Context/CurrentUserContext'

const DonarPage = () => {
  const currentUser = AuthService.getCurrentUser();
 // const [step] = useState(0);
  return (
    <>
      <div className="mx-auto relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 h-screen bg-cover place-content-center">
      <ProfileNavBar currentUser={currentUser}></ProfileNavBar>
        {currentUser ? (
        <div className="min-h-screen min-w-screen greenBg mt-20 px-5 py-16 md:p-16 md:p-20 flex flex-row justify-cente">
            <div className="bg-white h-fit w-screen rounded-xl lg:basis-2/5 p-10 md:p-16 lg:p-20 space-y-3">
                <FrequencyContextProvider>
                    <FrequencySection></FrequencySection>
                    <CurrentUserContextProvider>       
                    <FirstStep/>
                    </CurrentUserContextProvider>
                    {
                    //Por ahora solo hay un paso al ser la donación un MONTO
                    /* <StepTitle titleText={step === 0 ? 'Únase a nosotros para combatir la desnutrición infantil' : 'Donando $3000 por mes'}/>
                    {
                    step === 0 ?
                    <FirstStep setStep={setStep}/>
                    : <SecondStep/> 
                    }*/}
                </FrequencyContextProvider>
            </div>
        </div>
            ) : (
        <></>
    )} 
    </div> 
    </>
  );
};
export default DonarPage;