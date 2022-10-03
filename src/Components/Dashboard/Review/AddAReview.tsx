import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Button from "../../shared/Button";
import DashboardLayout from "../../shared/DashboardLayout";
import InputComponents from "../../shared/InputComponents";
import TextArea from "../../shared/TextArea";
import DashboardTitle from "../DashboardTitle";

type AddAReviewProps = {};

const AddAReview: React.FC<AddAReviewProps> = () => {
  const [user] = useAuthState(auth);
  const formHandler = (e: any) => {
    e.preventDefault();
    const description = e.target.description.value;
    const image = e.target.upload.files[0];
    const titles = e.target.titles.value;
    const email = e.target.email.value;
    const name = e.target.name.value;

    const imgStoreKey = "56281d4753a15bb93e3a006088ea61a1";
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imgStoreKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const newReview = {
            description: description,
            image: img,
            position: titles,
            email: email,
            name: name,
          };

          // post method
          const url = "https://creative-agancy-server.vercel.app/api/v1/review";
          fetch(url, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newReview),
          })
            .then((res) => res.json())
            .then((review) => {
              toast.success("successfully Review added");
            });
        }
      });
  };
  return (
    <DashboardLayout>
      <div>
        <DashboardTitle>Add a Review</DashboardTitle>
        <div className="bg-white p-16 mb-4 rounded-xl">
          <form onSubmit={formHandler}>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block uppercase leading-7 text-sm text-gray-600"
                >
                  your Name <span className="text-secondary">*</span>
                </label>
                <InputComponents
                  type={"text"}
                  placeholder={"your name"}
                  name={"name"}
                  className="bg-[#f7f8fa] placeholder-black"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block uppercase leading-7 text-sm text-gray-600"
                >
                  description <span className="text-secondary">*</span>
                </label>
                <TextArea
                  className="h-20"
                  name={"description"}
                  placeholder={"service description"}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
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
                  disabled={true}
                  defaultValue={user?.email}
                  className="bg-[#f7f8fa] placeholder-black"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block uppercase leading-7 text-sm text-gray-600"
                >
                  Upload service image
                  <span className="text-secondary">*</span>
                </label>
                <InputComponents
                  type={"file"}
                  placeholder={"upload"}
                  name={"upload"}
                  className="bg-[#f7f8fa] placeholder-black"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block uppercase leading-7 text-sm text-gray-600"
                >
                  your position <span className="text-secondary">*</span>
                </label>
                <InputComponents
                  type={"text"}
                  placeholder={"your position"}
                  name={"titles"}
                  className="bg-[#f7f8fa] placeholder-black"
                />
              </div>
            </div>

            <button type="submit" className="mt-[16px]">
              <Button>add a service</Button>
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};
export default AddAReview;
