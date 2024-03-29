import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import useAdminToken from "../../Hooks/useAdminToken";
import Loading from "./Loading";

const RequiredAdmin = ({ children }: any) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdminToken(user);

  const location = useLocation();

  if (loading || adminLoading) {
    return <Loading />;
  }
  if (!user || !admin) {
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};
export default RequiredAdmin;
