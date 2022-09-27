import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Button from "../Button";
import InputComponents from "../InputComponents";
import Loading from "../Loading";
import SocialMedia from "../SocialMedia";

type CreateAccountProps = {};

const CreateAccount: React.FC<CreateAccountProps> = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  type LocationProps = {
    state: {
      from: Location;
    };
  };

  const navigate = useNavigate();
  const location = useLocation() as unknown as LocationProps;

  let from = location.state?.from?.pathname || "/";

  const formHandler = async (e: {
    target: any;
    preventDefault: () => void;
  }) => {
    e.preventDefault();
    const email = e.target.email.value;
    const userName = e.target.userName.value;
    const password = e.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: userName });
    console.log(email, userName, password);
  };

  if (loading || updating) {
    return <Loading />;
  }
  if (user) {
    navigate(from, { replace: true });
  }

  let errorElement: JSX.Element | string;

  if (error || updateError) {
    errorElement = (
      <p className="text-center mt-[20px] text-red-500">
        {error?.message.slice(9)}
      </p>
    );
  } else {
    errorElement = "";
  }

  return (
    <section>
      <div className="mx-auto max-w-[1200px] py-[150px]">
        <div>
          <div className="shadow-[0px_4px_80px_rgba(0,0,0,0.1)]  rounded-[10px] max-w-[570px] mx-auto py-[70px] px-[40px]">
            <h2 className="text-[24px] leading-[29px] text-[#000] font-bold text-center font-[Montserrat]">
              Create an account
            </h2>
            <div className="mt-[32px]">
              <form onSubmit={formHandler}>
                <InputComponents
                  type={"text"}
                  placeholder={"Your userName"}
                  name={"userName"}
                  className="bg-[#f7f8fa] placeholder-black"
                />
                <InputComponents
                  type={"email"}
                  placeholder={"Your email address"}
                  name={"email"}
                  className="bg-[#f7f8fa] placeholder-black"
                />
                <InputComponents
                  type={"password"}
                  placeholder={"password"}
                  name={"password"}
                  className=" placeholder-black bg-[#f7f8fa]"
                />

                <button type="submit" className="mt-[16px]">
                  <Button>Create </Button>
                </button>
              </form>
            </div>
            <SocialMedia />
            <div>
              <p className="font-semibold text-[#000] leading-[20px]  font-[Montserrat] text-center mt-[15px]">
                Do you have an account?
                <Link to={"/login"}>
                  <span className="text-[#3f90fc]"> Login here</span>
                </Link>
              </p>
            </div>
            {errorElement}
          </div>
        </div>
      </div>
    </section>
  );
};
export default CreateAccount;
