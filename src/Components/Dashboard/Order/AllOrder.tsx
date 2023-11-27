import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import DashboardLayout from "../../shared/DashboardLayout";
import Loading from "../../shared/Loading";
import DashboardTitle from "../DashboardTitle";

type OrderProps = {};

const Order = () => {
  const {
    isLoading,
    data: allOrder,
    refetch,
  } = useQuery(["order"], () =>
    fetch(`https://creative-agancy-server.vercel.app/api/v1/order`).then(
      (res) => res.json()
    )
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
        toast.error("successfully deleted order ");
        refetch();
      });
  };
  return (
    <DashboardLayout>
      <div>
        <DashboardTitle>All Order</DashboardTitle>
        {/* table   */}
        <div className="relative overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-primary text-white uppercase rounded-xl">
                <th className="p-3 sm:p-5">Email</th>
                <th className="p-3 sm:p-5">Title</th>
                <th className="p-3 sm:p-5">Image</th>
                <th className="p-3 sm:p-5">Price</th>
                <th className="p-3 sm:p-5">Order Id</th>
                <th className="p-3 sm:p-5">Payment</th>
                <th className="p-3 sm:p-5">Cancel Order</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {allOrder &&
                allOrder.map(
                  ({
                    email,
                    title,
                    description,
                    price,
                    image,
                    paid,
                    _id,
                    orderId,
                  }: any) => (
                    <tr key={_id}>
                      <td className="p-3 sm:p-5">{email}</td>
                      <td className="p-3 sm:p-5">{title}</td>
                      <td className="p-3 sm:p-5">
                        <img
                          className="w-16 h-16 sm:w-24 sm:h-24 mx-auto"
                          src={image}
                          alt=""
                        />
                      </td>
                      <td className="p-3 sm:p-5">${price}</td>
                      <td className="p-3 sm:p-5">{_id.slice(17)}</td>
                      <td className="p-3 sm:p-5">
                        <h2 className="text-green-500 font-semibold">Paid</h2>
                      </td>
                      <td className="p-3 sm:p-5">
                        <button
                          className="font-bold text-[20px]"
                          onClick={() => deletedOrder(_id)}
                        >
                          x
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
export default Order;
