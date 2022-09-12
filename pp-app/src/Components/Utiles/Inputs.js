import "../LogInForm/LogIn.css"

const ClassicInput = (props) => {
  const onChangeInput = (e) => {
    const input = e.target.value;
    props.onChange(input);
  };
  return (
    <>        
        <div>
            <label htmlFor={props.htmlFor} className="sr-only">
            {props.placeholder}
            </label>
            <input
            type={props.type}
            id={props.id}
            name={props.id}
            autoComplete={props.autoComplete}
            className="relative bg-transparent h-12 block w-full rounded-xl  mb-2 md:mb-4 border border-gray-300 px-6 py-2 text-gray-900 placeholder-gray-600 focus:z-10 placeholderText focus:outline-none placeholderTextOnInput sm:text-sm"
            placeholder={props.placeholder}
            validations={props.validations}
            onChange={onChangeInput}
            />
        </div>           
    </>
  )
}

export default ClassicInput;