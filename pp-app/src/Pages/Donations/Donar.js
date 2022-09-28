import React, {useState} from "react"
import "../../App.css"
import AuthService from "../../services/auth.service";
import ProfileNavBar from "../../Components/NavBars/ProfileNavBar";
import FirstStep from '../../Components/Forms/Donations/FirstStep';
import FrequencySection from '../../Components/Forms/Donations/FrequencySection';
import SecondStep from '../../Components/Forms/Donations/SecondStep';
import StepTitle from '../../Components/Forms/Donations/StepTitle';
import { FrequencyContextProvider } from '../../Context/FrequencyContext';

const DonarPage = () => {
  const currentUser = AuthService.getCurrentUser();
  const [step, setStep] = useState(0);
  return (
    <>
      <div className="mx-auto relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 h-screen bg-cover place-content-center">
      <ProfileNavBar currentUser={currentUser}></ProfileNavBar>
        {currentUser ? (
        <div className="min-h-screen greenBg mt-20 p-20 flex flex-row">
            <div className="bg-white rounded-2xl lg:basis-2/5 p-16">
                <FrequencyContextProvider>
                    <FrequencySection></FrequencySection>
                    <StepTitle titleText={step === 0 ? 'Únase a nosotros para combatir la desnutrición infantil' : 'Donando $3000 por mes'}/>
                    {
                    step === 0 ?
                    <FirstStep setStep={setStep}/>
                    : <SecondStep/>
                    }
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