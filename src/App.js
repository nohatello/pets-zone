import "./App.css";
import { NavBar } from "./Component/NavBar";
import { Home } from "./pages/Home";
import { Footer } from "./Component/Footer";
import Cart from "./pages/Cart";
import Service from "./pages/Service";
import Services from "./pages/Services";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavBar />
          <div>
            <Route path="/" component={Home} exact />
            <Route path="/services" component={Services} exact />
            <Route path="/services/:id" component={Service} />
            <Route path="/cart" component={Cart} />
          </div>
        </div>

        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
