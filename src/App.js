import "./App.css";
import MainRoutes from "./utils/routes/MainRoute";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path={MainRoutes.homePage.path}
            element={MainRoutes.homePage.element}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
