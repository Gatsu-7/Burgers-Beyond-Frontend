import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Menu = () => {
  const addToCardHandler = () => {};
  return (
    <section id="menu">
      <h1>MENU</h1>
      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={178}
          title={"Cheese Burger"}
          handler={addToCardHandler}
          delay={0.2}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          price={199}
          title={"Cheese Burger with Double Patty"}
          handler={addToCardHandler}
          delay={0.5}
        />
        <MenuCard
          itemNum={3}
          burgerSrc={burger3}
          price={232}
          title={"Cheese Burger with medium Fries"}
          handler={addToCardHandler}
          delay={0.8}
        />
      </div>
    </section>
  );
};

export default Menu;
