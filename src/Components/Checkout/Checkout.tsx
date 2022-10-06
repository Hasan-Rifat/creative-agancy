import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Button from "../shared/Button";
import InputComponents from "../shared/InputComponents";
import Layout from "../shared/Layout";
import Loading from "../shared/Loading";
import TextArea from "../shared/TextArea";
type CheckoutProps = {};

const Checkout: React.FC<CheckoutProps> = () => {
  const [user, loading] = useAuthState(auth);
  const [load, setLoad] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, data: singleItem } = useQuery(["service", id], () =>
    fetch(
      `https://creative-agancy-server.vercel.app/api/v1/services/${id}`
    ).then((res) => res.json())
  );

  if (isLoading || load || loading) {
    return <Loading />;
  }

  const formHandler = (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const country = e.target.country.value;
    const townCity = e.target.townCity.value;
    const stateCountry = e.target.stateCounty.value;
    const postCode = e.target.postcodeZip.value;
    const phoneNumber = e.target.phoneNumber.value;
    const projectDetails = e.target.projectDetails.value;

    const fullDetails = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      country: country,
      townCity: townCity,
      stateCountry: stateCountry,
      postcode: postCode,
      phoneNumber: phoneNumber,
      projectDetails: projectDetails,
    };

    // post method
    const url = "https://creative-agancy-server.vercel.app/api/v1/checkout";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(fullDetails),
    })
      .then((res) => res.json())
      .then((payment) => {
        e.reset();
      });
    toast.success("successfully submit");
    navigate(`/payment/${singleItem._id}`);
  };
  return (
    <Layout className="py-[150px] mx-[10px] bg-[#f5f8ff]">
      <div className="grid grid-cols-3 gap-5">
        <div className="bg-white p-[40px] col-span-2">
          <h2 className="pb-[20px] text-center text-[36px] font-bold text-primary">
            Billing detail
          </h2>
          <div>
            <form onSubmit={formHandler}>
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block uppercase leading-7 text-sm text-gray-600"
                  >
                    first Name <span className="text-secondary">*</span>
                  </label>
                  <InputComponents
                    type={"text"}
                    placeholder={"First name"}
                    name={"firstName"}
                    className="bg-[#f7f8fa] placeholder-black"
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block uppercase leading-7 text-sm text-gray-600"
                  >
                    LAST Name <span className="text-secondary">*</span>
                  </label>
                  <InputComponents
                    type={"text"}
                    placeholder={"Last name"}
                    name={"lastName"}
                    className="bg-[#f7f8fa] placeholder-black"
                  />
                </div>
              </div>

              <div className="py-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block uppercase leading-7 text-sm text-gray-600"
                  >
                    Country <span className="text-secondary">*</span>
                  </label>
                  <InputComponents
                    type={"text"}
                    placeholder={"Country"}
                    name={"country"}
                    className="bg-[#f7f8fa] placeholder-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-10">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block uppercase leading-7 text-sm text-gray-600"
                  >
                    TOWN / CITY <span className="text-secondary">*</span>
                  </label>
                  <InputComponents
                    type={"text"}
                    placeholder={"town / city"}
                    name={"townCity"}
                    className="bg-[#f7f8fa] placeholder-black"
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block uppercase leading-7 text-sm text-gray-600"
                  >
                    STATE / COUNTY <span className="text-secondary">*</span>
                  </label>
                  <InputComponents
                    type={"text"}
                    placeholder={"state / county"}
                    name={"stateCounty"}
                    className="bg-[#f7f8fa] placeholder-black"
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block uppercase leading-7 text-sm text-gray-600"
                  >
                    POSTCODE / ZIP <span className="text-secondary">*</span>
                  </label>
                  <InputComponents
                    type={"number"}
                    placeholder={"postcode / zip"}
                    name={"postcodeZip"}
                    className="bg-[#f7f8fa] placeholder-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-10">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block uppercase leading-7 text-sm text-gray-600"
                  >
                    phone Number <span className="text-secondary">*</span>
                  </label>
                  <InputComponents
                    type={"number"}
                    placeholder={"phone number"}
                    name={"phoneNumber"}
                    className="bg-[#f7f8fa] placeholder-black"
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block uppercase leading-7 text-sm text-gray-600"
                  >
                    email <span className="text-secondary">*</span>
                  </label>
                  <InputComponents
                    type={"email"}
                    placeholder={"email"}
                    name={"email"}
                    defaultValue={user?.email}
                    disabled={true}
                    className="bg-[#f7f8fa] placeholder-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-10">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block uppercase leading-7 text-sm text-gray-600"
                  >
                    Details <span className="text-secondary">*</span>
                  </label>
                  <TextArea
                    type={"text"}
                    placeholder={"Project details"}
                    name={"projectDetails"}
                    className="bg-[#f7f8fa]  placeholder-black"
                  />
                </div>
              </div>

              <button type="submit" className="mt-[16px]">
                <Button>Confirm Order</Button>
              </button>
            </form>
          </div>
        </div>
        <div className="bg-white col-span-1 h-[500px]  items-center p-10 md:grid-cols-3 gap-[40px]  rounded-[10px]">
          <div className="mb-5">
            <img
              className="w-[50%] rounded mx-auto"
              src={singleItem?.image}
              alt="commerce"
            />
          </div>
          <div className=" md:mt-0 ">
            <h1 className="text-gray-900 text-[24px] title-font font-medium mb-1">
              {singleItem?.title}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>

                <span className="text-gray-600 ml-3">
                  {singleItem.rating} Reviews
                </span>
              </span>
            </div>
            <p className="leading-relaxed">
              {singleItem?.description.slice(0, 80)}
            </p>
            <div className="flex  mt-6  pb-5  mb-5">
              <span className="title-font font-medium text-2xl text-secondary">
                $<span className="text-primary">{singleItem.price}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Checkout;
