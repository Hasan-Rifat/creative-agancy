import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ContactUs from "../Components/Contact/Contact";
import CreateAccount from "../Components/CreateAccount/CreateAccount";
import Dashboards from "../Components/Dashboard/Dashboards";
import Index from "../Components/Dashboard/Index";
import Order from "../Components/Dashboard/Order";
import Review from "../Components/Dashboard/Review";
import ServicesList from "../Components/Dashboard/ServicesList";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import OurPortfolio from "../Components/OurPortfolio/OurPortfolio";
import OurServices from "../Components/OurServices/OurServices";
import ServicesDetails from "../Components/ServicesDetails/ServicesDetails";
import FooterEnd from "../Components/shared/Footer/FooterEnd";
import Header from "../Components/shared/Header/Header";
import Loading from "../Components/shared/Loading";
import NotFund from "../Components/shared/NotFund";
import RequireAuthProps from "../Components/shared/RequireAuthProps";

type RouteProps = {};

const AllRoute: React.FC<RouteProps> = () => {
  const location = useLocation();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/our-portfolio" element={<OurPortfolio />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/service/:id" element={<ServicesDetails />} />

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
};
export default AllRoute;
