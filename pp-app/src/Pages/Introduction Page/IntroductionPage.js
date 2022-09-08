import "../../Fonts/Poppins-Bold.ttf"
import "../../Components/NavBar/navBar.css"
import "./IntroductionPage.css"
import NavBar from '../../Components/NavBar/NavBar'
import LogInForm from "../../Components/LogInForm/LogInForm"

export default function IntroductionPage() {
  return (
    <>
      <div className="mx-auto relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 image h-screen bg-cover">
        <NavBar></NavBar>
        <LogInForm></LogInForm> 
      </div>
    </>

  )
}