import "../LogInForm/LogIn.css"

const SolidButton = ({ text, color, margins }) => {
  return (
    <>   
            <div>
              <button
                type="submit"
                /* className={`group relative flex w-full justify-center rounded-lg border border-transparent hoverYellowBg py-3 my-5 md:my-8 px-4 buttonText text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${color}${margins}`} */
                className={`group relative flex w-full justify-center rounded-lg border border-transparent hoverYellowBg py-3 px-4 buttonText text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${color} ${margins}`}
              >
                {text}
              </button>
            </div>
    </>
  )
}


export default SolidButton;