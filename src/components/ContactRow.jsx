import React from "react";

export default function ContactRow({ contact, setShowDetails, setId }) {
  return (
    <>
      <tr
        onClick={() => {
          //console.log(contact.address);
          setShowDetails(contact.address);
        }}
      >
        <td>{contact.name}</td>
        <td>{contact.phone}</td>
        <td>{contact.email}</td>
        <td>
          <button
            onClick={() => {
              setId(contact.id);
            }}
          >
            Show Details
          </button>
        </td>
      </tr>
    </>
  );
}
