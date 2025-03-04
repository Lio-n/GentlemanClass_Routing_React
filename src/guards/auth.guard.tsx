import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../models";
import { AppStore } from "../redux/store";

interface Props {
  privateValidation: boolean;
}

const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = <Navigate replace to={PrivateRoutes.PRIVATE} />;

export const AuthGuard = ({ privateValidation }: Props) => {
  const userState = useSelector((store: AppStore) => store.user);

  const validationFragment = privateValidation ? PrivateValidationFragment : PublicValidationFragment;

  return userState.name ? validationFragment : <Navigate replace to={PublicRoutes.LOGIN} />;
};

export default AuthGuard;
