import Cartbutton from "./Cartbutton";
import User from "./User";
import classes from './Cartbutton.module.css';

const Iconscont = (props) => {
    return (
        <>
        <div className={classes.icont}>
         <Cartbutton ondisplaycart1={props.ondisplaycart}/>
         <User/>
         </div> 
        </> 
    );
}

export default Iconscont;