import { useState } from "react";
import { deleteBook, updateBook } from "../ApiFunctionality/ApiFunctions";
import "../styles/Cards.css";

const CardsRead = ({ books, className}) => {
    if (!books || books.length === 0) {
        return <div className={className}>No books found.</div>;
    }
    
    const [ratingBooks, setratingBooks] = useState(books)

    const handleRating = (index, ratingValue) => {
        const newBooks = ratingBooks.map((book, i) =>
            i === index ? {...book, rating: ratingValue} : book);
        setratingBooks(newBooks);
    };


    const [updatedBooks, setupdatedBooks] = useState([])

    const handlePageRender = (index) => {
        const newBooks = books.splice(index, 1);
        setupdatedBooks(newBooks);
    }

    return (
        <div className="cards-container">

            {ratingBooks.map((bookArray, index) => {
                return (
                    <div key={index} className="card">
                        <img
                            src={bookArray.coverImage}
                            alt={`Book Cover ${index + 1}`}
                            className="card-book-img"
                        />
                        <h1> Rating: {bookArray.rating || "N/A"}</h1>
                        <button 
                            className="remove-button"
                            onClick={() => { 
                                if (bookArray?.olid) {
                                    console.log(bookArray.title)
                                    deleteBook(bookArray.title);
                                    handlePageRender(index)
                                } else {
                                    console.error('Invalid OLID');
                                }
                            }}
                        >Remove</button>
                        <select onChange={(event) => {
                            const ratingValue = event.target.value;
                            handleRating(index, ratingValue);
                            updateBook(bookArray.title, "read", ratingValue)
                        }}
                            name="rating" 
                            id="ratingSelection"
                            value={bookArray.rating || "0"}
                            >
                            <option value="0">N/A</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    
                );
            })}
        </div>
    );
};

export default CardsRead;

// <button className="update-button"  
                        //     onClick={() => {
                        //         if (bookArray?.olid) {
                        //             updateBook(bookArray.title, "read", rating)
                        //         } else {
                        //             console.error('Invalid OLID')
                        //         }
                        //     }}
                        // >Update Rating</button>