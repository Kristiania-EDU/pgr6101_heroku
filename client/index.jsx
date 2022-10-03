import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

const ReactApp = () => {
  return (
    <>
      <h1>Hello React with Express!</h1>
      <p>This is where i should showcase what i have learned ???</p>
    </>
  );
};

root.render(<ReactApp />);
