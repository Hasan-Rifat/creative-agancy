import { useEffect, useState } from "react";

const useAllOrder = () => {
  const [allOrder, setAllOrder] = useState([]);
  useEffect(() => {
    fetch("https://creative-agancy-server.vercel.app/api/v1/order")
      .then((res) => res.json())
      .then((data) => setAllOrder(data));
  }, []);

  return [allOrder];
};
export default useAllOrder;
