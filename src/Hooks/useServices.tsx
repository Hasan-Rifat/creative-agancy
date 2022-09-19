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
    const url = "http://localhost:5000/services";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return [service];
};
export default useServices;
