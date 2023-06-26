import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

import logo from "../logo.svg";
import RegisterPage from "../pages/RegisterPage";
import FormikBasicPage from "../pages/FormikBasicPage";
import FormikYupBasicPage from "../pages/FormikYupPage";
import FormikComponents from "../pages/FormikComponents";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React logo" />
          <ul>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Register-Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-basic"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik-Basic
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-yup"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                FormikYupPage
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-components"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                FormikComponents
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/formik-basic" element={<FormikBasicPage/>} />
          <Route path="/formik-yup" element={<FormikYupBasicPage/>} />
          <Route path="/formik-components" element={<FormikComponents/>} />
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
