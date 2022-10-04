import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./index.css";
import { useState } from "react";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

const ReactApp = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<FrontPage />}></Route>
          <Route path={"/login"} element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

const FrontPage = () => {
  return (
    <div className="front-page">
      <h1>Welcome to the ReactApp!</h1>

      <button>
        <Link to={"/login"}>Login</Link>
      </button>
    </div>
  );
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const result = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            name={"username"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type={"submit"}>Login</button>
      </form>
    </div>
  );
};

root.render(<ReactApp />);
