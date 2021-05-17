import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cartReducer"],
};

const rootReducer = combineReducers({
  userReducer: userReducer,
  cartReducer: cartReducer,
  directoryReducer: directoryReducer,
  shopReducer: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
