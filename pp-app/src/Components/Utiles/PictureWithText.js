import "../../Fonts/Poppins-Bold.ttf"
import "../NavBar/navBar.css"
import "../../Pages/Introduction Page/IntroductionPage.css"
import "../../App.css"

const  PictureWithText = ({ picture, title, text }) => {
  return (
    <>  
      <div className="greenBg py-5 md:py-20 lg:px-20 flex space-y-2 flex-col lg:flex-row ">  
        <div class="grid justify-items-center basis-1/2 ml-40">
          <img
                className="object-scale-down h-200 w-auto"
                src={picture}
                alt="title"
          />
        </div>
        <div className="basis-1/2 uneteTitle mx-40">
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