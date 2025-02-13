import googleLogo from "./asset/google.webp";

import "./../App.js";
export function Home() {
  return (
    <div className="App">
      <header>
        <h1 className="terolo"> Porfolio Manager </h1>
      </header>
      <div className="box">
        <div className="box1">
          <h2 className="signIn">Sign in</h2>
          <div className="rectangle">
            <img className="photo" src={googleLogo} alt="react logo" />

            <h3 className="google">Google</h3>
          </div>

          <form action="" className="form">
            <hr className="line1" />
            <h1 className="form__title">Or sign in with Email</h1>
            <hr className="line2" />

            <div className="form__group">
              <input
                type="text"
                id="email"
                className="form__input"
                placeholder=" "
                autocomplete="off"
              />
              <label for="email" className="form__label">
                Email
              </label>
            </div>

            <div className="form__group">
              <input
                type="password"
                id="password"
                className="form__input"
                placeholder=" "
              />
              <label for="password" className="form__label">
                Password
              </label>
            </div>
            <div className="rememberMe">
              <input
                type="checkbox"
                value="1"
                id="rememberMe"
                name="rememberMe"
              />

              <label for="rememberMe">
                <h3 className="remember">
                  Remember me
                  <a className="forgotPassword" href="https://www.google.com">
                    {" "}
                    Forgot Password?
                  </a>
                </h3>
              </label>
            </div>
            <button class="form__button">
              {" "}
              <div className="rectangle4">
                <h3 className="signIn1">Signin</h3>
              </div>
            </button>
          </form>

          <div className="signUp">
            <h3>
              Don't have an account?
              <a href="https://www.yahoo.com"> Signup for free</a>
            </h3>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>
          The site is protected by reCAPTCHA and the Google{" "}
          <a href="https://www.google.com">Privacy Policy</a> and{" "}
          <a href="https://www.google.com">Terms of Conditions</a> apply.
        </p>
      </footer>
    </div>
  );
}

