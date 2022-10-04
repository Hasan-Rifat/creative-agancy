import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Button from "../../shared/Button";
import InputComponents from "../../shared/InputComponents";
import Loading from "../../shared/Loading";
import TextArea from "../../shared/TextArea";

type ModalProps = {
  open: true;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  getData: any;
};

const Modal: React.FC<ModalProps> = ({ setOpen, open, getData }) => {
  const [load, setLoad] = useState(false);
  const [user, loading] = useAuthState(auth);

  if (load || loading) {
    return <Loading />;
  }
  const changeService = (e: any) => {
    e.preventDefault();

    const title = e.target.title.value;
    const description = e.target.description.value;
    const image = e.target.upload.files[0];
    const email = e.target.email.value;
    const price = e.target.price.value;

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
        setLoad(true);
       
        if (result.success) {
          setLoad(false);
          const img = result.data.url;
          const fullDetails = {
            title: title,
            description: description,
            image: img,
            email: email,
            price: price,
          };

          // post method
          const url = `https://creative-agancy-server.vercel.app/api/v1/services/${getData._id}`;
          fetch(url, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(fullDetails),
          })
            .then((res) => res.json())
            .then((payment) => {
              toast.success("update Service successfully");
              window.location.reload();
            });
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="edit-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box p-5 shadow-[0_10px_15px_0_rgba(253,71,102,0.1)] ">
          <label
            onClick={() => setOpen(!open)}
            htmlFor="edit-modal"
            className="btn btn-sm btn-circle absolute right-5 top-5"
          >
            ✕
          </label>
          <form onSubmit={changeService}>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block uppercase leading-7 text-sm text-gray-600"
                >
                  service title <span className="text-secondary">*</span>
                </label>
                <InputComponents
                  type={"text"}
                  placeholder={"service title"}
                  name={"title"}
                  defaultValue={getData?.title}
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
                  className="h-52"
                  name={"description"}
                  defaultValue={getData?.description}
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
                  price <span className="text-secondary">*</span>
                </label>
                <InputComponents
                  type={"number"}
                  placeholder={"price"}
                  name={"price"}
                  defaultValue={getData?.price}
                  className="bg-[#f7f8fa] placeholder-black"
                />
              </div>
            </div>

            <button type="submit" className="mt-[16px]">
              <Button>Update a service</Button>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Modal;
