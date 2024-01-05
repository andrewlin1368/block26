import "./App.css";
import ContactList from "./components/ContactList";
import { useState } from "react";
import ContactDetails from "./components/ContactDetails";
import SingleContact from "./components/SingleContact";

function App() {
  const [showDetails, setShowDetails] = useState(null);
  const [id, setId] = useState(0);
  return (
    (!id && (
      <>
        <ContactList
          setShowDetails={setShowDetails}
          setId={setId}
        ></ContactList>
        {showDetails && (
          <ContactDetails showDetails={showDetails}></ContactDetails>
        )}
      </>
    )) || (
      <SingleContact
        id={id}
        setId={setId}
        setShowDetails={setShowDetails}
      ></SingleContact>
    )
  );
}

export default App;
