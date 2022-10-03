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
        <div className="bg-white shadow-[0px_4px_80px_rgba(0,0,0,0.1)] p-8 rounded-[10px]">
          <div className="">
            <div>
              {/* head */}
              <div className="grid grid-cols-7 gap-4 text-center items-center bg-primary p-2 rounded-[40px] text-white uppercase">
                <div>email</div>
                <div>title</div>
                <div>image</div>
                <div>price</div>
                <div>Order Id</div>
                <div>payment</div>
                <div>cancel order</div>
              </div>
            </div>
          </div>
          <div>
            <div>
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
                    <div key={_id} className="py-[20px]">
                      {/* body  */}
                      <div className="grid grid-cols-7 gap-4 items-center text-center">
                        <div>
                          <p className="text-[12px]">{email}</p>
                        </div>
                        <div>
                          <p>
                            <span>{title}</span>
                          </p>
                        </div>
                        <div>
                          <img
                            className="w-[50px] h-[50px] mx-auto"
                            src={image}
                            alt=""
                          />
                        </div>
                        <div>
                          <p className="font-semibold">
                            <span className="text-secondary">$</span>
                            {}
                            <span>{price}</span>
                          </p>
                        </div>
                        <div>
                          <p>
                            <span>{_id.slice(17)}</span>
                          </p>
                        </div>

                        <div>
                          <h2 className="text-green-500 font-semibold">paid</h2>
                        </div>

                        <>
                          <button
                            className="font-bold text-[20px]"
                            onClick={() => deletedOrder(_id)}
                          >
                            x
                          </button>
                        </>
                      </div>
                    </div>
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
export default Order;
