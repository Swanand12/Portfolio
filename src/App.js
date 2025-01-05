import { BrowserRouter, Route, Routes } from "react-router-dom";
import PortFolio from "./PortFolio";
import { Toaster } from "react-hot-toast";
import { FaArrowUp } from "react-icons/fa";
import Sample from "./pages/Sample";
import Resume from "./pages/Resume";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Toaster />
        <Routes>
          <Route path="/" element={<PortFolio />} />
          <Route path="/s" element={<Sample />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
