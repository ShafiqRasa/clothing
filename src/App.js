import { useEffect } from "react";
import "./categories.style.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Shop from "./routes/shop/shop-route";
import Navigation from "./routes/navigation";
import Authentication from "./routes/authentication";
import Checkout from "./routes/checkout";
import {
  onAuthStateChangedListner,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase-api.config";
import { setCurrentUser } from "./store/user/actions";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      user && createUserDocumentFromAuth(user);
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
