import "./App.css";
import Header from "./Components/shared/Header/Header";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import CreateAccount from "./Components/CreateAccount/CreateAccount";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-portfolio" element={<Home />} />
        <Route path="/our-team" element={<Home />} />
        <Route path="/contact-us" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </main>
  );
}

export default App;
