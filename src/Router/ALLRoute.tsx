import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Checkout from "../Components/Checkout/Checkout";
import ContactUs from "../Components/Contact/Contact";
import AllUser from "../Components/Dashboard/AllUser/AllUser";
import Dashboards from "../Components/Dashboard/Dashboards";
import MyOrder from "../Components/Dashboard/MyOrder/MyOrder";
import {
  default as AllOrder,
  default as Order,
} from "../Components/Dashboard/Order/AllOrder";
import AddAReview from "../Components/Dashboard/Review/AddAReview";
import Review from "../Components/Dashboard/Review/Review";
import AddServices from "../Components/Dashboard/ServiceList/AddServices";
import ServicesList from "../Components/Dashboard/ServiceList/ServicesList";
import Home from "../Components/Home/Home";
import OurPortfolio from "../Components/OurPortfolio/OurPortfolio";
import OurServices from "../Components/OurServices/OurServices";
import Payment from "../Components/Payment/Payment";
import ServicesDetails from "../Components/ServicesDetails/ServicesDetails";
import CreateAccount from "../Components/shared/CreateAccount/CreateAccount";
import FooterEnd from "../Components/shared/Footer/FooterEnd";
import Header from "../Components/shared/Header/Header";
import Loading from "../Components/shared/Loading";
import Login from "../Components/shared/Login/Login";
import NotFund from "../Components/shared/NotFund";
import RequireAuthProps from "../Components/shared/RequireAuthProps";
import RequiredAdmin from "../Components/shared/RequiredAdmin";

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
        <Route
          path="/service/:id"
          element={
            <RequireAuthProps>
              <ServicesDetails />
            </RequireAuthProps>
          }
        />
        <Route
          path="/checkout/:id"
          element={
            <RequireAuthProps>
              <Checkout />
            </RequireAuthProps>
          }
        />
        <Route
          path="/payment/:id"
          element={
            <RequireAuthProps>
              <Payment />
            </RequireAuthProps>
          }
        />

        <Route
          path="/dashboard"
          element={
            <RequireAuthProps>
              <Dashboards />
            </RequireAuthProps>
          }
        >
          <Route index element={<AllOrder />} />
          <Route
            path="order"
            element={
              <RequiredAdmin>
                <Order />
              </RequiredAdmin>
            }
          />
          <Route path="review" element={<Review />} />
          <Route path="add-a-review" element={<AddAReview />} />
          <Route
            path="services-list"
            element={
              <RequiredAdmin>
                <ServicesList />
              </RequiredAdmin>
            }
          />
          <Route
            path="all-user"
            element={
              <RequiredAdmin>
                <AllUser />
              </RequiredAdmin>
            }
          />
          <Route
            path="add-services"
            element={
              <RequiredAdmin>
                <AddServices />
              </RequiredAdmin>
            }
          />
          <Route path="my-order" element={<MyOrder />} />
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
