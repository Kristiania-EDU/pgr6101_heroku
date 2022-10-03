import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

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
    <div>
      <h1>Welcome to the ReactApp!</h1>
      <ul>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      </ul>
    </div>
  );
};

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label>Username</label>
          <input name={"username"} />
        </div>
        <div>
          <label>Password</label>
          <input name={"password"} />
        </div>
      </form>
    </div>
  );
};

root.render(<ReactApp />);
