import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import paymentReducer from "./payment.reducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    payment: paymentReducer
  });
