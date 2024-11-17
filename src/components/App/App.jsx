import { Route, Routes } from "react-router-dom";
import HomePage from "../../Pages/Home/HomePage";
import LogInPage from "../../Pages/LogIn/LogInPage";
import RegisterPage from "../../Pages/Register/RegisterPage";
import ContactsPage from "../../Pages/Contacts/ContactsPage";
import Navigation from "../Navigation/Navigation";

  export default function App() {
  
  return (
    <div>

      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Contacts" element={<ContactsPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="logIn" element={<LogInPage />} />
      </Routes>

    </div>
  );
}
