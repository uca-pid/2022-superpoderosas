import "../LogInForm/LogIn.css"

const GreenSolidButton = ({ text }) => {
  return (
    <>   
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-lg border border-transparent greenBg hoverYellowBg py-3 my-5 md:my-8 px-4 buttonText text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                {text}
              </button>
            </div>
    </>
  )
}

export default GreenSolidButton;