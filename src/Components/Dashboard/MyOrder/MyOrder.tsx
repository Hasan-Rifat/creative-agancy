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
        <div>
          {" "}
          <div className="bg-white shadow-[0px_4px_80px_rgba(0,0,0,0.1)] p-8 rounded-[10px]">
            <div className="">
              <div>
                {/* head */}
                <div className="grid grid-cols-7 gap-4 text-center items-center bg-primary p-2 rounded-[40px] text-white uppercase">
                  <div>title</div>
                  <div>image</div>
                  <div>price</div>
                  <div>description</div>
                  <div>Order Id</div>
                  <div>payment</div>
                  <div>cancel order</div>
                </div>
              </div>
            </div>
            <div>
              <div>
                {singleOrder &&
                  singleOrder.map(
                    ({ title, description, price, image, paid, _id }: any) => (
                      <div key={_id} className="py-[20px]">
                        {/* body  */}
                        <div className="grid grid-cols-7 gap-4 items-center text-center">
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
                            <p className="text-[14px] text-justify">
                              {description.slice(0, 99)}
                            </p>
                          </div>
                          <div>
                            <p>
                              <span>{_id.slice(17)}</span>
                            </p>
                          </div>

                          {paid && (
                            <div>
                              <h2 className="text-green-500 font-semibold">
                                paid
                              </h2>
                            </div>
                          )}

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
      </div>
    </DashboardLayout>
  );
};
export default MyOrder;
