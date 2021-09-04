import React from "react";
import classes from "./Icecreamform.module.css";
import plus from "../../Images/plus.png";
import minus from "../../Images/minus.png";

function IceCreamform(props) {
  return (
    <div>
      <form className={classes.boxform}>
        <input
          type="image"
          name="minus"
          src={minus}
          className={classes.minus}
          alt="delete"
        />
        <input name="itemnum" id="amount" type="number" value={0} className={classes.itemnum} />
        <input
          type="image"
          name="plus"
          src={plus}
          className={classes.plus}
          alt="add"
        />
      </form>
    </div>
  );
}

export default IceCreamform;
