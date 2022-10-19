import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card.js";
import { useState, useEffect } from "react";
import MealItem from "./MealItem.js";
let AvailableMeals = () => {
  let [fetchMeal, setFetch] = useState("");
  useEffect(() => {
    fetch("https://food-app-19d70-default-rtdb.firebaseio.com/food.json")
      .then((response) => response.json())
      .then((data) => setFetch(data))
      .catch(() => console.log("error"));
  }, []);
  let newFetchMeal = [];
  for (let key in fetchMeal) {
    if (fetchMeal[key]) {
      newFetchMeal.push({
        id: fetchMeal[key].id,
        description: fetchMeal[key].description,
        name: fetchMeal[key].name,
        price: fetchMeal[key].price,
      });
    }
  }
  let mealsList = newFetchMeal.map((el) => {
    return (
      <MealItem
        key={el.id}
        id={el.id}
        name={el.name}
        description={el.description}
        price={el.price}
      />
    );
  });

  return (
    <Card className={styles.meals}>
      <ul>{mealsList}</ul>
    </Card>
  );
};
export default AvailableMeals;
