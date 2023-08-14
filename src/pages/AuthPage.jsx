import React, { useState } from "react";
import "../css/auth.css";
import { useAuthContext } from "../context/AuthConetxt";
import { Navigate } from "react-router-dom";

function AuthPage() {
  const { login, user } = useAuthContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const credentials = {
      email: data.get("email"),
      password: data.get("password"),
    };
    login(credentials);
  };

  if (!user) {
    <Navigate replace to="/admin" />;
  }

  return (
    <>
      <div className="container-auth">
        <form onSubmit={(e) => handleSubmit(e)} className="form-auth">
          <div className="heading">Login</div>
          <input
            className="input-auth"
            placeholder="Email"
            type="text"
            required=""
            name="email"
          />
          <input
            required=""
            className="input-auth"
            placeholder="Password"
            type="text"
            name="password"
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
