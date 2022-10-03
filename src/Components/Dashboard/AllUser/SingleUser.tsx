import React from "react";
import { MdEmail } from "react-icons/md";

type SingleUserProps = {
  _id: number;
  email: string | undefined;
  makeAdmin: (email: string) => void;
  deleteUser: (email: string) => void;
  person: any;
};

const SingleUser: React.FC<SingleUserProps> = ({
  person,
  makeAdmin,
  deleteUser,
}) => {
  return (
    <div className="my-5">
      <div className="grid grid-cols-3 justify-between">
        <div className="col-span-2 flex items-center">
          <MdEmail className="text-[20px] text-secondary" />
          <span className="ml-1">
            Email :{" "}
            {person.email === "mohammudrifat019@gmail.com"
              ? "admin@gmail.com"
              : person.email}
          </span>
        </div>

        <div className="col-span-1 flex justify-between">
          <div>
            {person.role ? (
              <>
                <div className="col-span-2 flex items-center">
                  <p className="ml-1 shadow-[0px_4px_80px_rgba(0,0,0,0.1)]  rounded-[5px]  xss:text-center  text-white bg-secondary px-[20px] ">
                    {person?.role}
                  </p>
                </div>
              </>
            ) : (
              <>
                <button
                  onClick={() => makeAdmin(person?.email)}
                  className="btn-sm cursor-pointer hover:translate-y-[-5px] ease-in-out duration-300 hover:shadow-[0px_4px_80px_rgba(0,0,0,0.1)]  rounded-[5px]  xss:text-center  text-white bg-primary  hover:bg-secondary"
                >
                  Make Admin
                </button>
              </>
            )}
          </div>
          <div>
            {person.email === "mohammudrifat019@gmail.com" ? (
              ""
            ) : (
              <button
                onClick={() => deleteUser(person?.email)}
                className="btn-sm cursor-pointer hover:translate-y-[-5px] ease-in-out duration-300 hover:shadow-[0px_4px_80px_rgba(0,0,0,0.1)]  rounded-[5px]  xss:text-center  text-white bg-primary  hover:bg-secondary"
              >
                Delete user
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleUser;
