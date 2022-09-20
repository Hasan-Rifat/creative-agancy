import { useEffect, useState } from "react";

type t = {
  _id: number;
  logo: string;
  description: string;
  title: string;
  name: string;
};

const useServices = () => {
  const [service, setService] = useState<t[]>([]);
  useEffect(() => {
    const url = "https://creative-agancy-server.vercel.app/services";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return [service];
};
export default useServices;
