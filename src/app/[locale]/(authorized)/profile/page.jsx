// import "./Profile.css";
import { getSession } from "@auth0/nextjs-auth0";
import ProfileContent from "../../../../Components/Profile/Profile";
export default async function Profile() {
  const { user } = (await getSession()) ?? {};

  return (
    <ProfileContent
      user
      username={user.name}
      picture={user.picture}
      useremail={user.email}
    />
  );
}
