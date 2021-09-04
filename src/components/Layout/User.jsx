import classes from './Cartbutton.module.css';
import user from '../../Images/user.png';
import {Link} from 'react-router-dom';

const User = props => {
  return(
     <Link to="./login">
     <button className={classes.user}>
        <img className={classes.usericon} src={user}/>
     </button>
     </Link>
  );
}

export default User;