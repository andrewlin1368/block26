import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SingleContact({ id, setId }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const singleData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    singleData();
  }, []);
  return (
    data && (
      <>
        <div>
          <h3>
            {data.name} @{data.username}
          </h3>
          <h4>
            {data.email} {data.phone}
          </h4>
          <p>
            Address: {data.address.suite} {data.address.street}{" "}
            {data.address.city}
          </p>
          <p>Company: {data.company.name}</p>
          <br />

          <button
            onClick={() => {
              setId(0);
            }}
          >
            Return Home
          </button>
        </div>
      </>
    )
  );
}
