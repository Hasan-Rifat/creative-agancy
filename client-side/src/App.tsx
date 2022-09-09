import "./App.css";
import Home from "./Components/Home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./Components/Login/Login";
import CreateAccount from "./Components/CreateAccount/CreateAccount";
import NotFund from "./Components/shared/NotFund";
import Dashboards from "./Components/Dashboard/Dashboards";
import Index from "./Components/Dashboard/Index";
import RequireAuthProps from "./Components/shared/RequireAuthProps";
import Header from "./Components/shared/Header/Header";
import FooterEnd from "./Components/shared/Footer/FooterEnd";
import Order from "./Components/Dashboard/Order";
import Review from "./Components/Dashboard/Review";
import ServicesList from "./Components/Dashboard/ServicesList";
import OurPortfolio from "./Components/OurPortfolio/OurPortfolio";
import Loading from "./Components/shared/Loading";

function App() {
  const location = useLocation();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/our-portfolio" element={<OurPortfolio />} />
        <Route path="/our-team" element={<Home />} />
        <Route path="/contact-us" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/loading" element={<Loading />} />

        <Route
          path="/dashboard"
          element={
            <RequireAuthProps>
              <Dashboards />
            </RequireAuthProps>
          }
        >
          <Route index element={<Index />} />
          <Route path="order" element={<Order />} />
          <Route path="review" element={<Review />} />
          <Route path="services-list" element={<ServicesList />} />
        </Route>
        <Route path="*" element={<NotFund />} />
      </Routes>
      {location.pathname.includes("/dashboard") ? null : (
        <>
          <Header /> <FooterEnd />
        </>
      )}
    </>
  );
}

export default App;
