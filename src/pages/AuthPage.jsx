import React from "react";
import "../css/auth.css";

function AuthPage() {
  return (
    <>
      <div className="container-auth">
        <form className="form-auth">
          <div className="heading">Login</div>
          <input
            className="input-auth"
            placeholder="Email"
            type="text"
            required=""
          />
          <input
            required=""
            className="input-auth"
            placeholder="Password"
            type="text"
          />
          <button type="submit" className="btn-auth">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AuthPage;
