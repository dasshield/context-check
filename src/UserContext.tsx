import { createContext, FC, useCallback, useContext, useMemo, useState } from "react";

type UserType = null | Record<string, any>

interface UserState {
  user: UserType;
  updateUser: (user: UserType) => void;
}

const initialValues = {
  user: null,
  updateUser: () => {},
}

const UserContext = createContext<UserState>(initialValues)

export const UserProvider: FC<any> = ({ children }) => {
  const [user, setUser] = useState<UserType>(initialValues.user)

  const updateUser = useCallback((user: UserType) => {
    setUser(user)
  }, [setUser])

  const value = useMemo(() => {
    return {
      user,
      updateUser,
    }
  }, [user, updateUser])

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser(): UserState {
  return useContext(UserContext)
}
