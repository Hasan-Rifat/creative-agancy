import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";
import DashboardLayout from "../../shared/DashboardLayout";
import Loading from "../../shared/Loading";
import DashboardTitle from "../DashboardTitle";
import SingleUser from "./SingleUser";

type AllUserProps = {};

const AllUser: React.FC<AllUserProps> = () => {
  const { isLoading, data, refetch } = useQuery(["user"], () =>
    fetch("https://creative-agancy-server.vercel.app/api/v1/users").then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  const makeAdmin = (email: string) => {
    const url = `https://creative-agancy-server.vercel.app/api/v1/admin/${email}`;

    fetch(url, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((admin) => {
        refetch();
        toast.success("successfully create a admin ");
      });
  };
  const deleteUser = (email: string) => {
    const url = `https://creative-agancy-server.vercel.app/api/v1/admin/${email}`;

    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((admin) => {
        refetch();
        toast.error("successfully deleted user ");
      });
  };

  return (
    <DashboardLayout>
      <div>
        <DashboardTitle> all users</DashboardTitle>
        <div className="bg-white shadow-[0px_4px_80px_rgba(0,0,0,0.1)] p-10 rounded-lg">
          {data &&
            data.map((person: any) => (
              <SingleUser
                key={person._id}
                person={person}
                makeAdmin={makeAdmin}
                deleteUser={deleteUser}
                _id={person._id}
                email={undefined}
              />
            ))}
        </div>
      </div>
    </DashboardLayout>
  );
};
export default AllUser;
