import React, { useState } from "react";
import Container from "../Common/Container";

function Login({handleLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleInputValue(e) {
    const elem = e.target.name;
    const value = e.target.value;

    if (elem === "email") {
      setEmail(value);
    } else if (elem === "password") {
      setPassword(value);
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    handleLogin(email, password);

    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <Container>
        <div className="flex flex-col items-start h-screen w-full p-5">
          <h2 className="text-white text-2xl font-semibold cursor-pointer">
            Login
          </h2>
          <div className="max-w-full rounded-xl m-auto">
            <form
              className="flex flex-col items-center justify-center gap-4"
              onSubmit={handleFormSubmit}
            >
              <input
                className="login-form-input"
                type="email"
                placeholder="e.g. admin@example.com"
                name="email"
                value={email}
                onChange={handleInputValue}
                required
              />
              <input
                className="login-form-input"
                type="password"
                placeholder="e.g. 123"
                name="password"
                value={password}
                onChange={handleInputValue}
                required
              />
              <button className="w-full px-4 py-2 bg-emerald-600 hover:bg-emerald-700 duration-100 text-white rounded-full text-xl font-semibold mt-4">
                Login
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;
