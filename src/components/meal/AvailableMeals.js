import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card.js";
import MealItem from "./MealItem.js";
let meals = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
let mealsList = meals.map((el, index) => {
  return (
    <div key={index}>
      <MealItem
        id={index}
        name={el.name}
        description={el.description}
        price={el.price}
      />
    </div>
  );
});
let AvailableMeals = () => {
  return (
    <Card className={styles.meals}>
      <ul>{mealsList}</ul>
    </Card>
  );
};
export default AvailableMeals;
