import { useEffect, useState } from "react";

const useToken = (user: any) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const userName = user?.displayName;
    const currentUser = { email: email, userName: userName };

    if (email) {
      fetch(`https://creative-agancy-server.vercel.app/api/v1/users/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {});
    }

    return setToken(user);
  }, [user]);
  return [token];
};
export default useToken;
