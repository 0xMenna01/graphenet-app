import React, { createContext, useContext, useState } from 'react'

import { SpaceAccount } from '../../model/SpaceAccount'

type Props = {
    children: React.ReactNode
}

type ContextType = {
    spaces: SpaceAccount[]
    setSpaces: (spaces: SpaceAccount[]) => void
}

export const SpacesContext = createContext<ContextType>({
    spaces: {} as SpaceAccount[],
    setSpaces: (spaces: SpaceAccount[]) => {},
})

export const SpacesProvider = ({ children }: Props) => {
    const [spaces, setSpaces] = useState<SpaceAccount[]>([] as SpaceAccount[])

    return (
        <SpacesContext.Provider value={{ spaces, setSpaces }}>
            {children}
        </SpacesContext.Provider>
    )
}

export function useSpaces() {
    return useContext(SpacesContext)
}
