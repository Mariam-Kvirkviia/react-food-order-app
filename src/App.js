import Header from "./components/header/Header";
import Meals from "./components/meal/Meals";

import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
