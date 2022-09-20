import { useQuery } from "@tanstack/react-query";
import Loading from "../Components/shared/Loading";

type t = {
  _id: number;
  logo: string;
  description: string;
  title: string;
  name: string;
};

const useServices = () => {
  const { isLoading, data: service } = useQuery(["service"], () =>
    fetch(`https://creative-agancy-server.vercel.app//services`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }
  /* const [service, setService] = useState<t[]>([]);
  useEffect(() => {
    const url = "https://creative-agancy-server.vercel.app/services";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []); */

  return [service];
};
export default useServices;
