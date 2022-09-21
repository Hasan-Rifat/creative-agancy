import { useEffect, useState } from "react";

// type useServicesProps = { useServices: any[] | JSX.Element };

const useServices = () => {
  const [service, setService] = useState<never[]>([]);
  useEffect(() => {
    fetch("https://creative-agancy-server.onrender.com/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return [service];
};
export default useServices;
