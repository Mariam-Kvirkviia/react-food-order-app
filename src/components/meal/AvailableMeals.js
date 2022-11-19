import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card.js";
import { useState, useEffect } from "react";
import MealItem from "./MealItem.js";
let AvailableMeals = () => {
  let [fetchMeal, setFetch] = useState("");
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://react-projects-160bb-default-rtdb.firebaseio.com/food.json")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        return setFetch(data);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
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
      {loading && <p className={styles.loading}>loading...</p>}
      {error && <p className={styles.error}>Something went wrong!</p>}
      {!loading && <ul>{mealsList}</ul>}
    </Card>
  );
};
export default AvailableMeals;
