import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BooksInfo from "./pages/BooksInfo";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/books" exact element={<Books books={books} />} />
        <Route
          path="/books/:id"
          exact
          element={<BooksInfo books={books} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
