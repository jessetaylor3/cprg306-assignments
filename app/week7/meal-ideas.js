import React, { useState, useEffect } from 'react';

//Define the function to fetch meal ideas based on the ingredient
const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals;
};

//Define the MealIdeas component
const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const loadMealIdeas = async () => {
      const fetchedMeals = await fetchMealIdeas(ingredient);
      setMeals(fetchedMeals);
    };

    loadMealIdeas();
  }, [ingredient]);

  //Render the fetched meals
  return (
    <div>
      <h1 style={{ fontSize: 'larger'}}>Meal Ideas:</h1>
      <ul>
        {meals.map(meal => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;
