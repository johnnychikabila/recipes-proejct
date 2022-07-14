import {useState, useEffect} from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';
import {getFilteredCategory} from '../api'
import { MealList } from '../components/MealList';
import { Preloader } from '../components/Preloader';
export const Category = () => {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getFilteredCategory(name).then(data => setMeals(data.meals));
    }, [name])

    return <>
        <button className='btn purple darken-4' style={{margin: '2rem 0 1.5rem'}} onClick={() => {navigate(-1)}}>Back to Categories</button>
        <h7 >Breadcrumbs: </h7>
          <span><Link to="/" style={{fontSize: '14px'}} >Home</Link></span>
          <span> / </span>
          <span><Link to="/category/" style={{fontSize: '14px'}} >Category</Link></span>
        {!meals.length ? (
            <Preloader />
        ) : (
            <MealList meals={meals}/>
        )}
          
    </>
}