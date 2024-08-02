import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";


import Menu from "./Components/Menu";
import AllCom from "./Components/AllCom";

import DataScience from "./Components/DataScience";
import CyberSecurity from "./Components/CyberSecurity";
import Career from "./Components/Career";
import Footer from "./Components/Footer";
import FSD from "./Components/FSD";


function App() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<AllCom />}></Route>
          <Route
            path="/fullStackDevelopment"
            element={<FSD />}
          ></Route>
          <Route path="/dataScience" element={<DataScience />}></Route>
          <Route path="/cyberSecurity" element={<CyberSecurity />}></Route>
          <Route path="/career" element={<Career />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;