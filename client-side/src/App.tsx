import "./App.css";
import auth from "./firebase.init";
import Header from "./Components/shared/Header/Header";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-portfolio" element={<Home />} />
        <Route path="/our-team" element={<Home />} />
        <Route path="/contact-us" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
