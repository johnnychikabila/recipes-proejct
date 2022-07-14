import {useState, useEffect} from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';
import {getMealById} from '../api'
import { Preloader } from '../components/Preloader';

export const Recipe = () => {
    const [recipe, setRecipe] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getMealById(id).then((data) => setRecipe(data.meals[0]))
    }, [id]);
    return <>
    
    {!recipe.idMeal ? (
    <Preloader />
    ) : (
        <div className="recipe">
            <button className='btn purple darken-4' style={{margin: '2rem 0 1.5rem'}} onClick={() => {navigate(-1)}}>Back to Meals</button>
            <h7 >Breadcrumbs: </h7>
          <span><Link to="/" style={{fontSize: '14px'}} >Home</Link></span>
          <span> / </span>
          <span><Link to="/category/" style={{fontSize: '14px'}} >Category</Link></span>
          <span> / </span>
          <span><Link to={`/meal/${recipe.idMeal}`} style={{fontSize: '14px'}} >{recipe.strMeal}</Link></span>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h1>{recipe.strMeal}</h1>
            <h6>Category: {recipe.strCategory}</h6>
            {recipe.strArea ? <h7 className=''>Area: {recipe.strArea}</h7> : null}
            <p>{recipe.strInstructions}</p>
            <table className='highlight' style={{width: 1000}}>
                <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Measure</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(recipe).map(key => {
                            if (key.includes('Ingredient') && recipe[key]) {
                                return (
                                    <tr key={key}>
                                        <td>{recipe[key]}</td>
                                        <td>{
                                        recipe[`strMeasure${key.slice(13)}`]
                                        }</td>
                                    </tr>
                                )
                            }
                            return null;
                        })
                    }
                </tbody>
            </table>
            {recipe.strYoutube ? (
                <div>
                    <h5 style={{margin: '2rem 0 1.5rem'}}>Video recipe</h5>
                    <iframe title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen />
                </div>
            ) : null}
        </div>
        
    )}
    </>
}