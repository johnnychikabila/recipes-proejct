import { Meal } from "./Meal"

export const MealList = ({meals, nameCategory}) => {

    return <div className='list'>
        {meals.map(meal => (
            <Meal key={meal.idMeal} nameCategory={nameCategory} {...meal}/>
        ))}
    </div>

} 