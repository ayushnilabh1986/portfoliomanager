import "./App.css";
import googleLogo from "./../src/assets/google.webp";

function App() {
  return (
    <div className="App">
      <h1 className="terolo"> Terolo </h1>
      <div className="box">
        <div className="box1">
          <h2 className="signIn">Sign in</h2>
          <div className="rectangle">
            <img className="photo" src={googleLogo} alt="react logo" />

            <h3 className="google">Google</h3>
          </div>
          <hr className="line1" />
          <div className="email">Or sign in with Email</div>
          <hr className="line2" />

          <br />

          <div className="rectangle2">
            <h3 className="email1">Email</h3>
          </div>
          <br />

          <div className="rectangle3">
            <h3 className="password">Password</h3>
          </div>
          <br />

          <div>
            <input type="checkbox" id="rememberMe" name="rememberMe" checked />

            <label for="rememberMe">
              <h3 className="remember">
                Remember me
                <a className="forgotPassword" href="forgotPassword.js"> Forgot Password?</a>
              </h3>{" "}
            </label>
          </div>
          <div className="rectangle4">
            <h3 className="signIn1">Signin</h3>
          </div>
          <div className="signUp">
            <h3>
              Don't have an account?
              <a href="SignUp.js"> Signup for free</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
