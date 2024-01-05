import React, { useState, useEffect } from "react";
import ContactRow from "./ContactRow";
import axios from "axios";

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

export default function ContactList({ setShowDetails, setId }) {
  const [contacts, setContacts] = useState(dummyContacts);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
          {/* {contacts.map((contact) => {
            return (
              <ContactRow
                key={contact.id}
                contact={contact}
                setShowDetails={setShowDetails}
                setId={setId}
              ></ContactRow>
            );
          })} */}
          {data.map((data) => {
            return (
              <ContactRow
                key={data.id}
                contact={data}
                setShowDetails={setShowDetails}
                setId={setId}
              ></ContactRow>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
