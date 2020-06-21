import React from "react";

function Profile(props) {
  return (
    <div>
      <h1>Student's profile</h1>
      <h2>Name:{props.name} </h2>
      <h2>Age:{props.age} </h2>
    </div>
  );
}

export default Profile;
