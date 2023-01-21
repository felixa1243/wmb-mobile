import {createContext, useMemo, useState} from "react";

export const UserNameContext = createContext(null)
export const UserNameContextProvider = (props) => {
    const {children} = props
    const [userName, setUsername] = useState(null)
    const value = useMemo(() => ({getUserName: () => userName, setUsername}), [userName])
    return (
        <UserNameContext.Provider value={value}>
            {children}
        </UserNameContext.Provider>
    )
}