import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";
import DashboardLayout from "../../shared/DashboardLayout";
import Loading from "../../shared/Loading";
import DashboardTitle from "../DashboardTitle";

type ReviewProps = {};

const Review: React.FC<ReviewProps> = () => {
  const {
    isLoading,
    data: review,
    refetch,
  } = useQuery(["review"], () =>
    fetch(`https://creative-agancy-server.vercel.app/api/v1/review`).then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  const deletedReview = (id: any) => {
    const url = `https://creative-agancy-server.vercel.app/api/v1/review/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((deleted) => {
        toast.error("deletedReview successfully");
        refetch();
      });
  };
  return (
    <DashboardLayout>
      <div>
        <DashboardTitle>Review page</DashboardTitle>
        <div className="bg-white shadow-[0px_4px_80px_rgba(0,0,0,0.1)] p-8 rounded-[10px]">
          <div className="">
            <div>
              {/* head */}
              <div className="grid grid-cols-6 gap-4 text-center items-center bg-primary p-2 rounded-[40px] text-white uppercase">
                <div>email</div>
                <div>name</div>
                <div>image</div>
                <div>titles</div>
                <div>description</div>
                <div>delete</div>
              </div>
            </div>
          </div>
          <div>
            <div>
              {review &&
                review
                  .reverse()
                  .map(
                    ({
                      description,
                      image,
                      position,
                      name,
                      email,
                      _id,
                    }: any) => (
                      <div key={_id} className="py-[20px]">
                        {/* body  */}
                        <div className="grid grid-cols-6 gap-4 items-center text-center">
                          <div>
                            <p className="text-[12px]">{email}</p>
                          </div>
                          <div>
                            <p>
                              <span>{name}</span>
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
                              <span>{position}</span>
                            </p>
                          </div>
                          <div>
                            <p>
                              <span>{description}</span>
                            </p>
                          </div>

                          <button
                            className="font-bold text-[20px]"
                            onClick={() => deletedReview(_id)}
                          >
                            x
                          </button>
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
export default Review;
