import React from 'react'
import useFetch from '../hooks/useFetch'


type IUvendas = {
    id: string,
    nome: string,
    preco: number,
    status: "pago" | "processando" | "falha",
    pagamento: "boleto" | "cartao" | "pix",
    parcelas: number | null,
    data: string
}

type IUDataVendas = {
    data?: IUvendas[] | null,
    loading?: boolean
    error: string | null 
}

const DataContext = React.createContext<IUDataVendas | null>(null)

const urlToFetch = "https://data.origamid.dev/vendas"


export const useData = () => {
    const context = React.useContext(DataContext)
    if (!context) throw new Error('useContext deve estar dentro do DataContextProvider');
    return context;
}


export const DataContextProvider = ({children} : React.PropsWithChildren) => {
    const { data, loading, error } = useFetch<IUvendas[]>(urlToFetch)


    return(
    <DataContext.Provider value={{data , loading, error }}>
        {children}
    </DataContext.Provider>
    )
}