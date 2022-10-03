import { Link } from "react-router-dom";
import logo from "../../images/logos/logo.png";
import DashboardActiveLink from "../shared/ActiveLink/DashboardActiveLink";

import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiFillDashboard } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { MdAddToPhotos, MdReorder } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { VscCommentDiscussion } from "react-icons/vsc";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useAdminToken from "../../Hooks/useAdminToken";
import serviceList from "../../images/dashboard-icon/Service list.svg";
import order from "../../images/dashboard-icon/shopping-cart-outline 1order.svg";
import Loading from "../shared/Loading";

const SideBar: () => JSX.Element = () => {
  const [user, loading] = useAuthState(auth);
  const [admin] = useAdminToken(user);

  if (loading) {
    return <Loading />;
  }

  const logout = () => {
    signOut(auth);
    toast.success("Logout successfully");
  };

  const SideBarMenu = (
    <>
      <li className="w-full block my-[15px] ">
        <DashboardActiveLink to={"/dashboard"}>
          <AiFillDashboard className="text-[30px]" />
          <span className="text-[20px]">Dashboard</span>
        </DashboardActiveLink>
      </li>

      <li className="w-full block my-[15px] ">
        <DashboardActiveLink to={"/dashboard/my-order"}>
          <MdReorder className="text-[30px]" />
          <span className="text-[20px]">My Order</span>
        </DashboardActiveLink>
      </li>
      <li className="w-full block my-[15px] ">
        <DashboardActiveLink to={"/dashboard/add-a-review"}>
          <MdAddToPhotos className="text-[30px]" />
          <span className="text-[20px]">Add A Review</span>
        </DashboardActiveLink>
      </li>

      {admin && (
        <>
          <li className="w-full block my-[15px] ">
            <DashboardActiveLink to={"/dashboard/review"}>
              <VscCommentDiscussion className="text-[30px]" />
              <span className="text-[20px]">Review</span>
            </DashboardActiveLink>
          </li>

          <li className="w-full block my-[15px] ">
            <DashboardActiveLink to={"/dashboard/services-list"}>
              <img className="w-[30px]" src={serviceList} alt="" />
              <span className="text-[20px]">Service List</span>
            </DashboardActiveLink>
          </li>
          <li className="w-full block my-[15px] relative">
            <DashboardActiveLink to={"/dashboard/add-services"}>
              <MdAddToPhotos className="text-[30px]" />
              <span className="text-[20px]">Add Service</span>
            </DashboardActiveLink>
          </li>
          <li className="w-full block my-[15px] ">
            <DashboardActiveLink to={"/dashboard/order"}>
              <img className="w-[30px]" src={order} alt="order-icon" />
              <span className="text-[20px]">All Order</span>
            </DashboardActiveLink>
          </li>
          <li className="w-full block my-[15px] relative">
            <DashboardActiveLink to={"/dashboard/all-user"}>
              <FaUserFriends className="text-[30px]" />
              <span className="text-[20px]">All User</span>
            </DashboardActiveLink>
          </li>
        </>
      )}

      <li className="w-full block my-[15px] " onClick={logout}>
        <button
          className=" bg-gradient-to-r from-[#FF0839]   border-[#D6002A]   w-full  px-[40px]  py-[17px] border-l-[8px]  border-transparent flex items-center gap-2

"
        >
          <RiLogoutBoxLine className="text-[30px]" />
          <span className="text-[20px]">Log Out</span>
        </button>
      </li>
    </>
  );
  return (
    <div className="py-[54px]">
      <div className="bg-white w-[140px]  ml-[40px] mb-[20px] p-[10px]">
        <Link to={`/`}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <ul className="text-white ">{SideBarMenu}</ul>
    </div>
  );
};
export default SideBar;
