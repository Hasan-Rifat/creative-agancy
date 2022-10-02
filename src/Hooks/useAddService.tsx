import { useEffect, useState } from "react";

const useAddService: () => never[][] = () => {
  const [service, setService] = useState<never[]>([]);
  useEffect(() => {
    fetch("https://creative-agancy-server.vercel.app/api/v1/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return [service];
};

export default useAddService;
