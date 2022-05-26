import { FC } from "react"
import { useUser } from "./UserContext"

const UserChanger: FC = () => {
  const { updateUser } = useUser()
  console.log("<UserChanger /> rerender")

  const onClick = () => {
    updateUser({ name: Math.random() + "", email: Math.random() + "@gmail.com" })
  }

  return (
    <div>
      <button onClick={onClick}>change user</button>
    </div>
  )
}

export default UserChanger;
