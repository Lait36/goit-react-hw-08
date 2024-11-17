import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/contactsOps";
import { useEffect } from "react";

export default function Contacts() {
const dispatch = useDispatch();

useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);  
  return (
    <div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
