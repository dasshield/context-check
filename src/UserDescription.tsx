import { FC } from "react"
import { useUser } from "./UserContext";

const UserDescription: FC = () => {
  const { user } = useUser();
  console.log("<UserDescription /> rerender")

  if (!user) {
    return <p>No user defined</p>
  }

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
}

export default UserDescription;
