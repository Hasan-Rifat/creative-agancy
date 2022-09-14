import React from "react";
import logo from "../../images/logos/logo.png";

import InputComponents from "../shared/InputComponents";
import Button from "../shared/Button";
import SocialMedia from "../shared/SocialMedia";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../shared/Loading";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  type LocationProps = {
    state: {
      from: Location;
    };
  };

  const navigate = useNavigate();
  const location = useLocation() as unknown as LocationProps;

  let from = location.state?.from?.pathname || "/";

  const formHandler = (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(typeof e.target.email);
    signInWithEmailAndPassword(email, password);
  };

  if (loading) {
    return <Loading />;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  let errorElement: JSX.Element | string;

  if (error) {
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
          <img
            className="w-[150px] h-[47px] mx-auto mb-[47px]"
            src={logo}
            alt="logo"
          />
        </div>

        <div className="shadow-[0px_4px_80px_rgba(0,0,0,0.1)]  rounded-[10px] max-w-[570px] mx-auto py-[70px] px-[40px]">
          <h2 className="text-[24px] leading-[29px] text-[#000] font-bold text-center font-[Montserrat]">
            Login With
          </h2>
          <div className="mt-[32px]">
            <form onSubmit={formHandler}>
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
                <Button>Login</Button>
              </button>
            </form>
          </div>
          <SocialMedia />
          <div>
            <p className="font-semibold text-[#000] leading-[20px]  font-[Montserrat] text-center mt-[15px]">
              Don’t have an account?
              <Link to={"/create-account"}>
                <span className="text-[#3f90fc]"> Create an account</span>
              </Link>
            </p>
          </div>
          {errorElement}
        </div>
      </div>
    </section>
  );
};
export default Login;
