import {useState, useEffect} from 'react';
import {useLocation, useNavigate, Link} from 'react-router-dom';
import {getAllCategories} from '../api';
import { CategoryList } from '../components/CategoryList';
import {Preloader} from '../components/Preloader'
import { Search } from '../components/Search';

export function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const {pathname, search} = useLocation();
    const navigate = useNavigate();

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
        );
        navigate(
            {
                pathname,
                search: `?search=${str}`
            }
        )
    }

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
            setFilteredCatalog(search ? 
                data.categories.filter((item) => 
                item.strCategory
                .toLowerCase()
                .includes(search.split('=')[1].toLowerCase())
                ) : data.categoriesgit commit -m “upload project”
            );
        });
    }, [search]);
    return <>
        <Search cb={handleSearch}/>
        {!catalog.length ? (
            <Preloader />
        ) : (
            <CategoryList catalog={filteredCatalog} />
            
        )}
        <h7 >Breadcrumbs: </h7>
          <span><Link to="/" style={{fontSize: '14px'}} >Home</Link></span>
    </>
}