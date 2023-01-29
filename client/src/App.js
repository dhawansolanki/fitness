import Header from "./Components/Header";

import RegisterPage from "./Components/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { Footer } from "./Components/Footer";
import Q1 from "./Components/Q1";
import BMICalculator from "./Components/BMICalc";
import P2 from "./Components/P2";
import LoginPage from "./Components/LoginPage";
import Q3 from "./Components/Q3";
import Q4 from "./Components/Q4";
import Q5 from "./Components/Q5";
import Exe from "./Components/Exe";
import Dashboard from "./Components/Dashboard";
import Diet from "./Components/Diet";
import DietVegMenu from "./Components/DietVegMenu";
import DietNonVegMenu from "./Components/DietNonVegMenu";
import DietSpecial from "./Components/DietSpecial";

function App() {
  return (
    <div
      className="App"
      style={{
        background: "#076585" /* fallback for old browsers */,
        background:
          "-webkit-linear-gradient(to bottom, #fff, #076585)" /* Chrome 10-25, Safari 5.1-6 */,
        background:
          "linear-gradient(to bottom, #fff, #076585)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
      }}
    >
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/BMICalculator" element={<BMICalculator />} />
          <Route path="/q1" element={<Q1 />} />
          <Route path="/p2" element={<P2 />} />
          <Route path="/q3" element={<Q3 />} />
          <Route path="/q4" element={<Q4 />} />
          <Route path="/q5" element={<Q5 />} />
          <Route path="/exe" element={<Exe />} />
          <Route path="/dashboard" element={ <Dashboard/> } />
          <Route path="/diet" element={<Diet/>} />
          <Route path="/dietveg" element={<DietVegMenu/>} />
          <Route path="/dietnonveg" element={<DietNonVegMenu/>} />
          <Route path="/dietspecial" element={<DietSpecial/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
