import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Dashboard} />
    <ProtectedRoute exact path="/transactions" component={Transactions} />
    <ProtectedRoute exact path="/profile" component={Profile} />
  </Switch>
);

export default App;

// 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

