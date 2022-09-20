import "../../Fonts/Poppins-Bold.ttf"
import "../NavBars/navBar.css"
import "../../Pages/Registration-Autentification.js/IntroductionPage.css"
import "../../App.css"

const  PictureWithText = ({ picture, title, text }) => {
  return (
    <>  
      <div className="greenBg py-5 md:py-20 lg:px-20 flex space-y-2 flex-col sm:flex-col md:flex-col lg:flex-row ">  
        <div className="grid justify-items-center basis-1/2 mx-10 lg:ml-30">
          <img
                className="object-scale-down h-200 w-auto mt-10"
                src={picture}
                alt="title"
          />
        </div>
        <div className="basis-1/2 uneteTitle mx-10 lg:mx-30">
          <div className="mt-5">
            {title}
          </div>
          <div className="uneteText mt-8 text-justify">
           {text}
          </div>
        </div>
      </div>
    </>
  )
}

export default PictureWithText;