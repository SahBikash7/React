import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please Login</div>;
  if (!user.username) return <div>Please Enter UserName</div>;
  if (!user.password) return <div>Please Enter Password</div>;

  return <div>Welcome {user.username}</div>;
}

export default Profile;
