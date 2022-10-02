import { useQuery } from "@tanstack/react-query";
import React from "react";
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
    console.log(email);
    const url = `http://localhost:5000/api/v1/admin/${email}`;

    fetch(url, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((admin) => {
        refetch();
        console.log(admin);
      });
  };
  const deleteUser = (email: string) => {
    console.log(email);
    const url = `http://localhost:5000/api/v1/admin/${email}`;

    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((admin) => {
        refetch();
        console.log(admin);
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
