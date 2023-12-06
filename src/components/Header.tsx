import { useData } from '../Context/DataContext'

const Header = () => {
    const { data,loading} = useData()

    if(loading) return <h1>Carregando...</h1>
    // console.log(data)
    if(!data) return null
    return (
        <h1>header</h1>
    )
}

export default Header