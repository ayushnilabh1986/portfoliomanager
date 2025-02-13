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

          <form action="" className="form">
    <h1 className="form__title">Or sign in with Email</h1>

    <div className="form__group">
      <input type="text" id="email" className="form__input" placeholder=" " autocomplete="off" />
      <label for="email" className="form__label">Email</label>
    </div>

    <div className="form__group">
      <input type="password" id="password" className="form__input" placeholder=" " />
      <label for="password" className="form__label">Password</label>
    </div>
    <div className="rememberMe">
            <input type="checkbox" id="rememberMe" name="rememberMe" checked />

            <label for="rememberMe">
              <h3 className="remember">
                Remember me
                <a className="forgotPassword" href="forgotPassword.js"> Forgot Password?</a>
              </h3>
            </label>
          </div>
    <button class="form__button"> <div className="rectangle4">
            <h3 className="signIn1">Signin</h3>
          </div></button>
  </form>



          
         
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
