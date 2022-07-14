import {Link} from 'react-router-dom';

export const Meal = (props) => {
    const {idMeal, strMeal, strMealThumb, nameCategory} = props;

    return <div id={idMeal} className="card">
    <div className="card-image">
      <img src={strMealThumb} alt={strMeal} loading='lazy'/>
    </div>
    <div className="card-content">
      <span className="card-title">{strMeal}</span>
    </div>
    <div className="card-action">
        <Link to={`/category/${nameCategory}/${idMeal}`} className='btn purple darken-2'>Watch</Link>
    </div>
  </div>
}