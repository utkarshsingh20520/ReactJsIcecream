import classes from './Items.module.css';
import IceCreamform from './IceCreamform';

const Items = props =>{

    const price = `$${props.price}`;
    return(
        <>
         <div>
           <div className={classes.image}>
             <img src={props.image}/>
            </div>
          <div className={classes.text}>
           <h1>{props.name}</h1>
           <span className={classes.p1}>{props.description} </span>
           <span className={classes.p2}>{price}</span>

           <IceCreamform/>
         </div>
        </div>
        </>
    );
}

export default Items;