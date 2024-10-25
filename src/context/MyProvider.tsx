import { createContext, FC, ReactNode, useContext } from "react"

export const MyContext = createContext<undefined | {}>(undefined)

interface IMyProviderProps {
    children: ReactNode
}

export const MyProvider: FC<IMyProviderProps> = ({ children }) => {
    return <MyContext.Provider value={{}}>{children}</MyContext.Provider>
}

export const useMyContext = () => {
    const context = useContext(MyContext)
    if (!context) {
        throw new Error("component must be used within MyProvider")
    }
    return context
}
