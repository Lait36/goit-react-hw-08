import { Route, Routes } from "react-router-dom";
import HomePage from "../../Pages/Home/HomePage";
import LogInPage from "../../Pages/LogIn/LogInPage";
import RegisterPage from "../../Pages/Register/RegisterPage";
import ContactsPage from "../../Pages/Contacts/ContactsPage";
import Navigation from "../Navigation/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { useEffect } from "react";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import css from "./App.module.css";
import PrivateRoute from "../PrivateRoute";
import RestrictedRoute from "../RestrictedRoute";

export default function App() {
  const dispatch = useDispatch();
  const isRfreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRfreshing ? (
    <p className={css.message}>Please wait</p>
  ) : (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="сontacts"
          element={
            <PrivateRoute component={<ContactsPage />} redirectTo={"/login"} />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute
              component={<RegisterPage />}
              redirectTo={"/сontacts"}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute
              component={<LogInPage />}
              redirectTo={"/сontacts"}
            />
          }
        />
      </Routes>
    </div>
  );
}
