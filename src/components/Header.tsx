import { useData } from '../Context/DataContext'

const Header = () => {
    const { data } = useData()
    console.log(data)
    if(!data) return null
    return (
        <h1>header</h1>
    )
}

export default Header