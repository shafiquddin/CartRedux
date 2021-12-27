import { cartAction } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchRequest = async () => {
      const response = await fetch(
        "https://redux-cff74-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("couldnt fetch data");
      }
      const data = await response.json();
      return data;
    };
    try {
      const data = await fetchRequest();
      dispatch(cartAction.replaceCart(data));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "error",
          message: "failed to fettch",
        })
      );
    }
  };
};

export const sendDataCart = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "sending",
        title: "Sending",
        message: "sending data to cart",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://redux-cff74-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("somthing Went wrong!");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "sent data to cart successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "sending data to cart failed",
        })
      );
    }
  };
};

export default cartAction;
