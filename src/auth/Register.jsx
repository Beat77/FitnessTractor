import { Link } from "react-router";

/** A form that allows users to register for a new account */
export default function Register() {
  
 <Link to ="/activities"></Link>


  return (
    <>
      <h1>Register for an account</h1>
      <form action={tryRegister}>
        <label>
          Username
          <input type="text" name="username" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <button>Register</button>
        {error && <output>{error}</output>}
      </form>
      <Link to ="/login">Already have an account? Log in here. Login </Link>
        
      
    </>
  );
}
