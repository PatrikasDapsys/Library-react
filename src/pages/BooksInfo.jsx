import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const BooksInfo = () => {
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book_link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book_link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src="https://covers.openlibrary.org/b/id/8091016-L.jpg" alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">Name</h2>
                <FontAwesomeIcon icon="star" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BooksInfo;
