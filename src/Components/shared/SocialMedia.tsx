import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import googleLogo from "../../images/logos/Google logo.png";
// import facebookLogo from "../../images/logos/facebook logo.png";

type SocialMediaProps = {};

const SocialMedia: React.FC<SocialMediaProps> = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let errorElement: JSX.Element | string;

  const [token] = useAdmin(user);

  type LocationProps = {
    state: {
      from: Location;
    };
  };

  const navigate = useNavigate();
  const location = useLocation() as unknown as LocationProps;

  let from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

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
    <div className="mb-[25px] cursor-pointer">
      <div
        onClick={() => signInWithGoogle()}
        className="mt-[32px] items-center rounded-[57px] grid grid-cols-6  px-[7px] py-[10px] border-[#C7C7C7] border-[1px]"
      >
        <img
          className="block col-span-2 [31px] h-[31px]"
          src={googleLogo}
          alt="googleLogo"
        />
        <p className="col-span-4 font-[Montserrat]">Continue with Google</p>
      </div>
      {/* <div className="mt-[15px]  items-center rounded-[57px] grid grid-cols-6  px-[2px] py-[0px] border-[#C7C7C7] border-[1px]">
        <img
          className="block col-span-2 w-[50px] h-[50px]"
          src={facebookLogo}
          alt="googleLogo"
        />
        <p className="col-span-4 font-[Montserrat]">Continue with Facebook</p>
      </div> */}
      {errorElement}
    </div>
  );
};
export default SocialMedia;
