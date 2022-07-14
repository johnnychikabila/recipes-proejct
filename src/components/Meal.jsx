import {Link, useLocation, useNavigate} from 'react-router-dom';

export const Meal = (props) => {
    const {idMeal, strMeal, strMealThumb} = props;

    const {pathname} = useLocation();
    const navigate = useNavigate();
    navigate(
      {
        pathname,
        search: `/meal/${idMeal}`
      }
    );

    return <div id={idMeal} className="card">
    <div className="card-image">
      <img src={strMealThumb} alt={strMeal} />
    </div>
    <div className="card-content">
      <span className="card-title">{strMeal}</span>
    </div>
    <div className="card-action">
        <Link to={`/meal/${idMeal}`} className='btn purple darken-2'>Watch</Link>
    </div>
  </div>
}