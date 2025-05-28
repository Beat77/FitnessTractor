import { Link } from "react-router";

/** A form that allows users to log into an existing account. */
export default function Login() {
  


    <Link to ="/activities"></Link>

  return (
    <>
      <h1>Log in to your account</h1>
      <form action={tryLogin}>
        <label>
          Username
          <input type="text" name="username" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <button>Login</button>
        {error && <output>{error}</output>}
      </form>
      <Link to ="/register">Need an account? Register here. Register</Link>
    </>
  );
}
