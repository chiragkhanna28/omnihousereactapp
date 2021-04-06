import './App.css';
import Header from './components/Header/index.js';
import Footer from './components/Footer/index.js';
import ReferenceCheck from './components/ReferenceCheck/index.js';
import ReferenceCheckForm from './components/ReferenceCheckForm/index.js';
import PaymentSuccess from './components/PaymentSuccess/index.js';
import StripeApi from './components/StripeApi/index.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/" exact component={() => <ReferenceCheck />} />
          <Route path="/reference-check" exact component={() => <ReferenceCheckForm />} />
          <Route path="/payment" exact component={() => <StripeApi />} />
          <Route path="/paymentsuccess" exact component={() => <PaymentSuccess />} />
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
