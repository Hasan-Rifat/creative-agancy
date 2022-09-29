import { useEffect, useState } from "react";

const useAdmin = (user: any) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };

    if (email) {
      fetch(`https://creative-agancy-server.vercel.app/api/v1/users/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("instert data on mongodb", data);
        });
    }

    return setToken(user);
  }, [user]);
  return [token];
};
export default useAdmin;
