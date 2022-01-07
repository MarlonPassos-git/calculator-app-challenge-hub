import { createContext, ReactNode, useState, useContext } from 'react'


export const DadosContext = createContext({} )

interface DadosProps { 
    children: ReactNode;
}

interface a { 
    Dados: any,
    setDados: Function
}


export const DadosProvider = ({ children }: DadosProps) => {

    const [equation, setEquation] = useState<string>('');
    

    return (
        <DadosContext.Provider
            value={{
                equation,
                setEquation,
                
            }}
        >
            {children}
        </DadosContext.Provider>
    )
}

export function useDados() {
    const context = useContext(DadosContext);

    return context
}
