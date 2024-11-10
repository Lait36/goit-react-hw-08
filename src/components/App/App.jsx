// import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../Pages/Home/HomePage";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Navigation from "../Navigation/Navigation";
import SearchBox from "../SearchBox/SearchBox";
// import { fetchContacts } from "../../redux/contacts/contactsOps";
// import { useEffect } from "react";
export default function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      {/* <HomePage /> */}
      {/*   <ContactForm /> */}
      {/*   <SearchBox /> */}
      {/*   <ContactList /> */}
    </div>
  );
}
