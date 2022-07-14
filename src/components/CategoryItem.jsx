import {Link} from 'react-router-dom'

export const CategoryItem = (props) => {
    const {idCategory, strCategory, strCategoryThumb, strCategoryDescription} = props;

    return <div id={idCategory} className="card">
    <div className="card-image">
      <img src={strCategoryThumb} alt={strCategory} />
    </div>
    <div className="card-content">
      <span className="card-title">{strCategory}</span>
      <p>{strCategoryDescription.slice(0, 60)}...</p>
    </div>
    <div className="card-action">
        <Link to={`/category/${strCategory}`} className='btn purple darken-2'>Watch</Link>
    </div>
  </div>
}