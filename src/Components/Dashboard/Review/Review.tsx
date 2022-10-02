import React from "react";
import DashboardLayout from "../../shared/DashboardLayout";
import DashboardTitle from "../DashboardTitle";

type ReviewProps = {};

const Review: React.FC<ReviewProps> = () => {
  return (
    <DashboardLayout>
      <div>
        <DashboardTitle>Review page</DashboardTitle>
      </div>
    </DashboardLayout>
  );
};
export default Review;
