import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BooksInfo from "./pages/BooksInfo";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, book])
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/books" exact element={<Books books={books} />} />
        <Route
          path="/books/:id"
          exact
          element={<BooksInfo books={books} addToCart={addToCart} cart={cart}/>}
        />
        <Route path="/cart" exact element={<Cart books={books} cart={cart} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
