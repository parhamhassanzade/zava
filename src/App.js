import logo from './logo.svg';
import './App.css';
import MainRoutes from './utils/routes/MainRoute';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={MainRoutes.homePage.path} element={MainRoutes.homePage.element} />
      </Routes>
    </Router>

  );
}

export default App;
