import { useQuery } from "@tanstack/react-query";
import Loading from "../Components/shared/Loading";

type t = {
  _id: number;
  logo: string;
  description: string;
  title: string;
  name: string;
}[];

const useServices = () => {
  const { isLoading, data: service } = useQuery<any, unknown, any, string[]>(
    ["service"],
    () =>
      fetch(`https://creative-agancy-server.onrender.com/services`).then(
        (res) => res.json()
      )
  );

  if (isLoading) {
    return <Loading />;
  }

  return [service];
};
export default useServices;
