import React, { useState } from "react";
import "../css/Login.css";
import googleicon from "../assets/icon-google.svg";
import facebookicon from "../assets/icon-facebook.svg";
import appleicon from "../assets/icon-apple.svg";
import FormbgImage from "../assets/bg-img.jpg";

const LoginSection = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <>
      {/*=============== LOGIN IMAGE ===============*/}
      <svg
        className="login__blob"
        viewBox="0 0 566 840"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="mask0" mask-type="alpha">
          <path
            d="M342.407 73.6315C388.53 56.4007 394.378 17.3643 391.538 
        0H566V840H0C14.5385 834.991 100.266 804.436 77.2046 707.263C49.6393 
        591.11 115.306 518.927 176.468 488.873C363.385 397.026 156.98 302.824 
        167.945 179.32C173.46 117.209 284.755 95.1699 342.407 73.6315Z"
          />
        </mask>

        <g mask="url(#mask0)">
          <path
            d="M342.407 73.6315C388.53 56.4007 394.378 17.3643 391.538 
        0H566V840H0C14.5385 834.991 100.266 804.436 77.2046 707.263C49.6393 
        591.11 115.306 518.927 176.468 488.873C363.385 397.026 156.98 302.824 
        167.945 179.32C173.46 117.209 284.755 95.1699 342.407 73.6315Z"
          />
          {/* Use xlink:href for SVG image source */}
          <image
            className="login__img"
            xlinkHref={FormbgImage}
            alt="Background"
          />
        </g>
      </svg>

      {/*=============== LOGIN SECTION ===============*/}
      <div
        className={`login container grid ${isRegister ? "active" : ""}`}
        id="loginAccessRegister"
      >
        {/*===== LOGIN ACCESS =====*/}
        <div className="login__access">
          <h1 className="login__title">Log in to your account.</h1>
          <div className="login__area">
            <form className="login__form">
              <div className="login__content grid">
                <div className="login__box">
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder=" "
                    className="login__input"
                  />
                  <label htmlFor="email" className="login__label">
                    Email
                  </label>
                  <i className="ri-mail-fill login__icon"></i>
                </div>

                <div className="login__box">
                  <input
                    type="password"
                    id="password"
                    required
                    placeholder=" "
                    className="login__input"
                  />
                  <label htmlFor="password" className="login__label">
                    Password
                  </label>
                  <i
                    className="ri-eye-off-fill login__icon login__password"
                    id="loginPassword"
                  ></i>
                </div>
              </div>
              <a href="#" className="login__forgot">
                Forgot your password?
              </a>
              <button type="submit" className="login__button">
                Login
              </button>
            </form>

            {/* SOCIAL LOGIN */}
            <div className="login__social">
              <p className="login__social-title">Or login with</p>
              <div className="login__social-links">
                <a href="#" className="login__social-link">
                  <img
                    src={googleicon}
                    alt="Google"
                    className="login__social-img"
                  />
                </a>
                <a href="#" className="login__social-link">
                  <img
                    src={facebookicon}
                    alt="Facebook"
                    className="login__social-img"
                  />
                </a>
                <a href="#" className="login__social-link">
                  <img
                    src={appleicon}
                    alt="Apple"
                    className="login__social-img"
                  />
                </a>
              </div>
            </div>

            <p className="login__switch">
              Don't have an account?{" "}
              <button onClick={() => setIsRegister(true)}>
                Create Account
              </button>
            </p>
          </div>
        </div>

        {/*===== LOGIN REGISTER =====*/}
        <div className="login__register">
          <h1 className="login__title">Create new account.</h1>
          <div className="login__area">
            <form className="login__form">
              <div className="login__content grid">
                <div className="login__group grid">
                  <div className="login__box">
                    <input
                      type="text"
                      id="names"
                      required
                      placeholder=" "
                      className="login__input"
                    />
                    <label htmlFor="names" className="login__label">
                      Names
                    </label>
                    <i className="ri-id-card-fill login__icon"></i>
                  </div>

                  <div className="login__box">
                    <input
                      type="text"
                      id="surnames"
                      required
                      placeholder=" "
                      className="login__input"
                    />
                    <label htmlFor="surnames" className="login__label">
                      Surnames
                    </label>
                    <i className="ri-id-card-fill login__icon"></i>
                  </div>
                </div>

                <div className="login__box">
                  <input
                    type="email"
                    id="emailCreate"
                    required
                    placeholder=" "
                    className="login__input"
                  />
                  <label htmlFor="emailCreate" className="login__label">
                    Email
                  </label>
                  <i className="ri-mail-fill login__icon"></i>
                </div>

                <div className="login__box">
                  <input
                    type="password"
                    id="passwordCreate"
                    required
                    placeholder=" "
                    className="login__input"
                  />
                  <label htmlFor="passwordCreate" className="login__label">
                    Password
                  </label>
                  <i
                    className="ri-eye-off-fill login__icon login__password"
                    id="loginPasswordCreate"
                  ></i>
                </div>
              </div>
              <button type="submit" className="login__button">
                Create account
              </button>
            </form>
            <p className="login__switch">
              Already have an account?{" "}
              <button onClick={() => setIsRegister(false)}>Log In</button>
            </p>
          </div>
        </div>
      </div>
      </>

  );
};

export default LoginSection;
