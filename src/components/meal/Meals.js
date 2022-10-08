import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import { Fragment } from "react";
let Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};
export default Meals;
