import "../LogInForm/LogIn.css"

const ClassicInput = ({htmlFor, placeholder, id, autoComplete}) => {
  return (
    <>        
        <div>
            <label htmlFor={htmlFor} className="sr-only">
            {placeholder}
            </label>
            <input
            id={id}
            name={id}
            type={id}
            autoComplete={autoComplete}
            required
            className="relative bg-transparent h-12 block w-full rounded-xl  mb-2 md:mb-4 border border-gray-300 px-6 py-2 text-gray-900 placeholder-gray-600 focus:z-10 placeholderText focus:outline-none placeholderTextOnInput sm:text-sm"
            placeholder={placeholder}
            />
        </div>           
    </>
  )
}

export default ClassicInput;