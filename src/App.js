import { useEffect } from "react";
import "./categories.style.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.route";
import Shop from "./routes/shop/shop-route";
import Navigation from "./routes/navigation/navigation.route";
import Authentication from "./routes/authentication/authentication.route";
import Checkout from "./routes/checkout/checkout.route";
import { useDispatch } from "react-redux";
import { checkUserSession } from "./store/user/user-actions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

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
