import React from "react";
import useServices from "../../../Hooks/useServices";

type TotalServicesProps = {};

const TotalServices: React.FC<TotalServicesProps> = () => {
  const [service] = useServices();
  return (
    <div className="bg-white p-[1.25rem] rounded-[7px]">
      Services <span className="text-secondary">{service.length}</span>
    </div>
  );
};
export default TotalServices;
