import "./App.css";
import { Header } from "./components/Header/Header";
import { FirstInfoBlock } from "./components/InfoBlocks/FirstInfoBlock/FirstInfoBlock";
import { SecondInfoBlock } from "./components/InfoBlocks/SecondInfoBlock/SecondInfoBlock";
import { ThirdInfoBlock } from "./components/InfoBlocks/ThirdInfoBlock/ThirdInfoBlock";
import { FourthInfoBlock } from "./components/InfoBlocks/FourthInfoBlock/FourthInfoBlock";
import { FormBlock } from "./components/FormBlock/FormBlock";
import { Footer } from "./components/Footer/Footer";
import { Gallery } from "./components/Gallery/Gallery";

function App() {
  return (
    <div className="App">
      <Header />
      <FirstInfoBlock />
      <SecondInfoBlock />
      <ThirdInfoBlock />
      <FourthInfoBlock />
      <Gallery />
      <FormBlock />
      <Footer />
    </div>
  );
}

export default App;
