import React, { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
  if (!ingredient) return [];  // Ensure no request is made if ingredient is empty

  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`); // Handle HTTP errors
  }
  const data = await response.json();
  return data.meals || []; // Return an empty array if no meals found
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(''); // State to handle any errors

  useEffect(() => {
    const loadMealIdeas = async () => {
      try {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
        setError(''); // Reset error state on successful fetch
      } catch (e) {
        setError(e.message);
      }
    };

    if (ingredient) { //Only load meal ideas if an ingredient is selected
      loadMealIdeas();
    } else {
      setMeals([]); //If no ingredient is selected, clear the meals list
    }
  }, [ingredient]);

  if (error) {
    return <p>Error fetching meal ideas: {error}</p>; //Display error message
  }

  // Display a different message when no meals found
  if (meals.length === 0 && ingredient) {
    return <p>No meal ideas found for {ingredient}</p>;
  }

  //Render the fetched meals or a prompt to select an ingredient
  return (
    <div>
      <h2 className="text-3xl mb-4">Meal Ideas:</h2>
      {meals.length > 0 ? (
        <ul>
          {meals.map(meal => (
            <li key={meal.idMeal}>{meal.strMeal}</li>
          ))}
        </ul>
      ) : (
        <p>Please select an ingredient to get meal ideas.</p>
      )}
    </div>
  );
};

export default MealIdeas;
