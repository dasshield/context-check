import { FC } from "react"
import UserChanger from "./UserChanger"
import UserDescription from "./UserDescription"

const UserCard: FC = () => {
  console.log("<UserCard /> render")
  return (
    <div>
      <UserDescription />
      <UserChanger />
    </div>
  )
}

export default UserCard;
