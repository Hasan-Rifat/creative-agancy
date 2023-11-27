import { useQuery } from "@tanstack/react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import DashboardLayout from "../../shared/DashboardLayout";
import Loading from "../../shared/Loading";
import DashboardTitle from "../DashboardTitle";

type MyOrderProps = {};

const MyOrder = () => {
  const [user, loading] = useAuthState(auth);
  const {
    isLoading,
    data: singleOrder,
    refetch,
  } = useQuery(["myOrder"], () =>
    fetch(
      `https://creative-agancy-server.vercel.app/api/v1/order/${user?.email}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  const deletedOrder = (id: any) => {
    const url = `https://creative-agancy-server.vercel.app/api/v1/order/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((deleted) => {
        toast.error("deleted");
        refetch();
      });
  };
  return (
    <DashboardLayout>
      <div>
        <DashboardTitle>My Order</DashboardTitle>
        <div className="relative overflow-x-auto">
          <table className="table table-bordered table-hover w-full">
            <thead>
              <tr className="bg-primary ">
                <th className="p-5">Title</th>
                <th className="p-5">Image</th>
                <th className="p-5">Price</th>
                <th className="p-5">Description</th>
                <th className="p-5">Order Id</th>
                <th className="p-5">Payment</th>
                <th className="p-5">Cancel Order</th>
              </tr>
            </thead>
            <tbody>
              {singleOrder &&
                singleOrder.map(
                  ({ title, description, price, image, paid, _id }: any) => (
                    <tr key={_id}>
                      <td className="p-5">{title}</td>
                      <td className="p-5">
                        <img
                          className="w-[50px] h-[50px] mx-auto"
                          src={image}
                          alt=""
                        />
                      </td>
                      <td className="p-5">${price}</td>
                      <td className="p-5 text-justify">
                        {description.slice(0, 30)}
                      </td>
                      <td className="p-5">{_id.slice(17)}</td>
                      <td className="p-5">
                        {paid ? (
                          <span className="text-green-500 font-semibold">
                            Paid
                          </span>
                        ) : null}
                      </td>
                      <td className="p-5">
                        <button
                          className="btn btn-danger"
                          onClick={() => deletedOrder(_id)}
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  )
                )}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};
export default MyOrder;
