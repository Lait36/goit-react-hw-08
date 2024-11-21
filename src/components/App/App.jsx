import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { lazy, Suspense, useEffect } from "react";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import css from "./App.module.css";
import PrivateRoute from "../PrivateRoute";
import RestrictedRoute from "../RestrictedRoute";
import Layout from "../Layout/Layout";

const HomePage = lazy(() => import("../../pages/Home/HomePage"));
const RegisterPage = lazy(() => import("../../pages/Register/RegisterPage"));
const LogInPage = lazy(() => import("../../pages/LogIn/LogInPage"));
const ContactsPage = lazy(() => import("../../pages/Contacts/ContactsPage"));

export default function App() {
  const dispatch = useDispatch();
  const isRfreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRfreshing ? (
    <p className={css.message}>Please wait</p>
  ) : (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="сontacts"
            element={
              <PrivateRoute
                component={<ContactsPage />}
                redirectTo={"/login"}
              />
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
      </Suspense>
    </Layout>
  );
}
