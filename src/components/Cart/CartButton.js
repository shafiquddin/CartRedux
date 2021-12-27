import classes from "./CartButton.module.css";
import { useDispatch,useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";


const CartButton = (props) => {
 const badgeCart=useSelector(state=>state.cart.totalQuantity)
  const dispatch=useDispatch();
  const toggleHandler=()=>{
    dispatch(uiActions.toggle())
  }
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{badgeCart}</span>
    </button>
  );
};

export default CartButton;
