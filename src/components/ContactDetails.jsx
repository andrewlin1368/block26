import React from "react";

export default function ContactDetails({ showDetails }) {
  // if (showDetails === "N/A") {
  //   return (
  //     <div>
  //       <br />
  //       <p>Address: NA </p>
  //       <p>Geo: NA</p>
  //     </div>
  //   );
  // } else {
  return (
    <div>
      <br />
      <p>
        Address: {showDetails.street} {showDetails.suite}, {showDetails.city},{" "}
        {showDetails.zipcode}
      </p>
      <p>
        Geo: {showDetails.geo.lat} , {showDetails.geo.lng}
      </p>
    </div>
  );
  //}
}
