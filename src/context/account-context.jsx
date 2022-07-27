import { createContext, useState } from "react"
const AccountContext = createContext({
    client: {
        account: null,
        page: null,
        social: null,
    },
    changeClient: (account, page, social) => {},
})
export const AccountContextProvider = ({ children }) => {
    const [client, setClient] = useState({
        account: null,
        page: null,
        social: null,
    })
    const changeClient = (account, page, social) => {
        setClient({
            account,
            page,
            social,
        })
    }
    return (
        <AccountContext.Provider
        value={{
            client,
            changeClient,
        }}
        >
        {children}
        </AccountContext.Provider>
    )
}
export default AccountContext