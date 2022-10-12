import { isEmail } from "validator";

const required = (value) => {
    if (!value) {
      console.log("required!");
      return (
        <div className="alert redText alert-danger text-base my-2 mx-0" role="alert">
          ¡Este campo es obligatorio!
        </div>
      );
    }
  };
  const validEmail = (value) => {
    if (!isEmail(value)) {
      console.log("invalid email!");
      return (
        <div className="alert redText alert-danger text-base my-2 mx-0" role="alert">
        Mail no válido.
        </div>
      );
    }
  };
  const vstrings = (value) => {
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if(!regName.test(value)){
       <div className="alert redText alert-danger text-base my-2 mx-0" role="alert">
          Debe ser solamente texto, no puede contener otro tipo de caracteres.
        </div>
    }else{
      alert('Valid name given.');
    }
  };
  const vpassword = (value) => {
    if (value.length < 6 || value.length > 20) {
      return (
        <div className="alert redText alert-danger text-base my-2 mx-0 " role="alert">
          La contraseña tiene que tener al menos 10 caracteres y como máximo 20.
        </div>
      );
    }
  };
  
const ValidationFunctions = {
    required,
    validEmail,
    vpassword,
    vstrings,
}
export default ValidationFunctions;