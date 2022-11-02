import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useUser } from "@auth0/nextjs-auth0";
import React, {useState} from "react"

export default function User() {
  const route = useRouter();

  const { user, error, isLoading } = useUser();
  const [logoutDiv, setLogOutDiv] = useState(false)

  function seeAuth() {
    if (!user) {
      route.push("/api/auth/login")
    } else {
      setLogOutDiv(prevState => !prevState)
    }
  }

  if (!user)
    return (
      <div className="login" onClick={seeAuth}>
        <FaUserCircle />
        <h3>Login</h3>
      </div>
    );

  return (
    <Profile onClick={seeAuth}>
      <img className={`imgPP ${logoutDiv && 'imgbord'}`} src={user.picture} alt={user.name} />
      <h3>{user.name}</h3>
      {logoutDiv && <div className="logout">
        <p onClick={() => route.push("/my-orders")}>My Orders</p>
        <p onClick={() => route.push("/api/auth/logout")}>Logout</p>
      </div>}
    </Profile>
  );
}

const Profile = styled.div`
  img {
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
  }`;
