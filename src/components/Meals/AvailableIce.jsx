import classes from "./AvailableIce.module.css";
import Card from "../UI/Card";
import Items from "./Items";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    image: "https://source.unsplash.com/user/erondu/1600x900",
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    image: "https://source.unsplash.com/user/erondu/1600x900",
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    image: "https://source.unsplash.com/user/erondu/1600x900",
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    image: "https://source.unsplash.com/user/erondu/1600x900",
  },
];

const AvailableIce = (props) => {
  const Icecreamlist = DUMMY_MEALS.map((ice) => (
    <li className={classes.cat}>
      <Items
        key={ice.id}
        name={ice.name}
        description={ice.description}
        price={ice.price}
        image={ice.image}
      />
    </li>
  ));

  return (
    <>
      <section className={classes.meals}>
          <ul>{Icecreamlist}</ul>
      </section>
    </>
  );
};

export default AvailableIce;
