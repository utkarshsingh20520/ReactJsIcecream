import classes from './Cartbutton.module.css';
import Carticon from '../Cart/Carticon';

const Cartbutton = props => {
  return(
     <button className={classes.button} onClick={props.ondisplaycart1}>
     <span className={classes.icon}><Carticon/></span>
     <span className={classes.badge}>
         3
     </span>
     </button>
  );
}

export default Cartbutton;