import { isEmail } from "validator";

const required = (value) => {
    if (!value) {
      console.log("required!");
      return (
        <div className="alert redText alert-danger text-base m-0" role="alert">
          This field is required!
        </div>
      );
    }
  };
  const validEmail = (value) => {
    if (!isEmail(value)) {
      console.log("invalid email!");
      return (
        <div className="alert redText alert-danger text-base m-0" role="alert">
          This is not a valid email.
        </div>
      );
    }
  };
  const vstrings = (value) => {
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if(!regName.test(value)){
      <div className="alert redText alert-danger text-base m-0" role="alert">
          This is not a valid name.
        </div>
    }else{
      alert('Valid name given.');
    }
  };
  const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert redText alert-danger text-base m-0" role="alert">
          The password must be between 6 and 40 characters.
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