import { useEffect, useRef, useState } from "react";
import "./Login.css";

function Login() {
  const errRef = useRef(null);
  const userRef = useRef(null);

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser("");
    setPwd("");
    setSuccess(true);
  };
  return (
    <>
      {success ? (
        <>Successfully logged in</>
      ) : (
        <>
          <p ref={errRef} aria-live="assertive">
            {errMsg}
          </p>
          <h1>Log In</h1>
          <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <label>Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button>Submit</button>
          </form>
        </>
      )}
    </>
  );
}

export default Login;
