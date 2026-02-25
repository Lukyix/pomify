import "./App.css";
import { ButtonsColorsBg } from "./components/ButtonsColorsBg";
import { ButtonsColorsText } from "./components/ButtonsColorsText";
import { Main } from "./components/Main";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Main />
      <ButtonsColorsBg />
      <ButtonsColorsText />
      <Analytics />
    </>
  );
}

export default App;
